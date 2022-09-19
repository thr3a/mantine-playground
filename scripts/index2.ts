import glob from "fast-glob";
import {basename} from 'path';
import {readFileSync } from 'fs';
import { Props } from '../features/demo/Props';

const files = glob.sync([
  '/home/thr3a/work/mantine/docs/src/docs/core/*.mdx',
  '/home/thr3a/work/mantine/docs/src/docs/dates/*.mdx',
  '/home/thr3a/work/mantine/docs/src/docs/others/*.mdx',
]);

const dataList = [];

// for (const filepath of files) {
//   const text = readFileSync(filepath, { encoding: 'utf8' });
//   const json = JSON.parse(text) as Props;
//   dataList.push(json);
//   // const name = basename(filepath).replace('.tsx', '');
//   // import文
//   // console.log(`import { Demo as ${name}Demo } from '../scripts/code/${name}';`);
//   // component文
//   // console.log(`<DemoContainer {...item} key={item.slug}><${name}Demo></${name}Demo></DemoContainer>`);
// }
