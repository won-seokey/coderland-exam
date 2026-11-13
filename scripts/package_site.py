"""Create the static-upload ZIP from the tracked public folder, using stdlib only."""
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
destination = ROOT / 'releases' / '프로그래밍_실력테스트_웹배포용.zip'

def main():
    files = sorted(p for p in PUBLIC.rglob('*') if p.is_file())
    assert (PUBLIC / 'index.html').is_file()
    assert all(p.stat().st_size < 25 * 1024 * 1024 for p in files)
    destination.parent.mkdir(exist_ok=True)
    with zipfile.ZipFile(destination, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
        for file in files:
            archive.write(file, file.relative_to(PUBLIC).as_posix())
        archive.write(ROOT / 'docs' / '프로그래밍_실력테스트_사용안내.md', '프로그래밍_실력테스트_사용안내.md')
    with zipfile.ZipFile(destination) as archive:
        assert archive.testzip() is None
    print(f'{destination.name}: {len(files)} assets, {destination.stat().st_size:,} bytes')

if __name__ == '__main__':
    main()
