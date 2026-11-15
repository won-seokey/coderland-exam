import assert from 'node:assert/strict';
import { readFile, readdir, stat, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const filenames = await readdir(root);
for (const name of filenames) {
  const info = await stat(path.join(root, name));
  assert(info.isFile(), `Unexpected public directory: ${name}`);
  assert(info.size < 25 * 1024 * 1024, `Cloudflare file size exceeded: ${name}`);
  if (name.endsWith('.js')) new vm.Script(await readFile(path.join(root, name), 'utf8'), { filename: name });
}
const html = await readFile(path.join(root, 'index.html'), 'utf8');
for (const [, reference] of html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css|svg|png|ico|webmanifest)(?:\?[^"]*)?)"/g)) {
  await access(path.join(root, reference.split('?')[0]));
}
const context = vm.createContext({ window: {} });
for (const name of ['problems.js', 'cpp-problems.js', 'judge-cases.js', 'cpp-judge-cases.js', 'cpp-runtime.js']) {
  new vm.Script(await readFile(path.join(root, name), 'utf8'), { filename: name }).runInContext(context);
}
let total = 0;
for (const language of ['PYTHON', 'CPP']) {
  const problems = context.window[language + '_PROBLEMS'];
  const courses = context.window[language + '_COURSES'];
  const tests = context.window[language + '_JUDGE_CASES'].problems;
  assert.equal(problems.length, 65);
  assert.equal(courses.length, 4);
  for (const course of courses) {
    const questions = problems.filter(p => p.course === course.id);
    assert.equal(questions.length, course.count);
    assert.equal(questions.reduce((sum, p) => sum + p.points, 0), 100);
  }
  for (const p of problems) {
    assert.equal(p.samples.length, 2);
    assert.equal(tests[p.id].length, 19);
    for (const test of tests[p.id]) {
      assert.equal(typeof test.input, 'string'); assert.equal(typeof test.output, 'string');
    }
    total += tests[p.id].length;
  }
}
for (const name of context.window.CPP_RUNTIME.files) await access(path.join(root, name));
await access(path.join(root, 'python-runtime.js'));
for (const name of ['cpp-runtime.LICENSE.txt', 'python-runtime.LICENSE.txt']) await access(path.join(root, name));


const manifest = JSON.parse(await readFile(path.join(root, 'site.webmanifest'), 'utf8'));
for (const icon of manifest.icons) await access(path.join(root, icon.src));
console.log(`Checked ${filenames.length} assets, JavaScript syntax, 130 problems and ${total} grading cases.`);
