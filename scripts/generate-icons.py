"""Export PNG/ICO sizes from the source SVG. Development tools: Playwright + Pillow."""
import base64
import io
from pathlib import Path
from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'

def main():
    svg = base64.b64encode((PUBLIC / 'favicon.svg').read_bytes()).decode('ascii')
    with sync_playwright() as pw:
        browser = pw.chromium.launch(channel='msedge', headless=True)
        page = browser.new_page()
        for size, name in [(16,'favicon-16.png'), (32,'favicon-32.png'), (180,'apple-touch-icon.png'), (192,'icon-192.png'), (512,'icon-512.png'), (64,None)]:
            encoded = page.evaluate('''async ({svg,size,opaque})=>{
                const img=new Image();img.src='data:image/svg+xml;base64,'+svg;await img.decode();
                const canvas=document.createElement('canvas');canvas.width=canvas.height=size;
                const context=canvas.getContext('2d');
                if(opaque){context.fillStyle='#3157ed';context.fillRect(0,0,size,size);}
                context.drawImage(img,0,0,size,size);
                return canvas.toDataURL('image/png').split(',')[1];
            }''', {'svg': svg, 'size': size, 'opaque': bool(name and size>=180)})
            if name:(PUBLIC / name).write_bytes(base64.b64decode(encoded))
            else:ico_source=base64.b64decode(encoded)
        browser.close()
    image = Image.open(io.BytesIO(ico_source))
    image.save(PUBLIC / 'favicon.ico', format='ICO', sizes=[(16,16),(32,32),(48,48)])
    print('Generated 5 PNG icons and multi-size favicon.ico from favicon.svg')

if __name__ == '__main__':
    main()
