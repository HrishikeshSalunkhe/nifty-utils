import fs from 'fs';

const apiDocs = fs.readFileSync('docs/globals.md', 'utf-8');
let readme = fs.readFileSync('README.md', 'utf-8');

readme = readme.replace(
  /<!-- API_DOCS_START -->[\s\S]*<!-- API_DOCS_END -->/,
  `<!-- API_DOCS_START -->\n${apiDocs}\n<!-- API_DOCS_END -->`
);

fs.writeFileSync('README.md', readme);
console.log('README updated with API docs!');
