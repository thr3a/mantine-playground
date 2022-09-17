import glob from "fast-glob";
import {basename} from 'path';

const files = glob.sync('code/*.tsx');
const blacklist = [
  'Affix',
  'TypographyStylesProvider',
  'AppShell'
];

for (const filepath of files) {
  const name = basename(filepath).replace('.tsx', '');
  if (blacklist.includes(name)) {
    continue;
  }
  // import文
  // console.log(`import { Demo as ${name}Demo } from '../scripts/code/${name}';`);
  // component文
  console.log(`<DemoContainer {...item} key={item.slug}><${name}Demo></${name}Demo></DemoContainer>`);
}
