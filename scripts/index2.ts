import glob from "fast-glob";
import {basename} from 'path';
import {readFileSync } from 'fs';
import { Props } from '../features/demo/Props';

const files = glob.sync('./data/json/*.json');

const dataList = [];

for (const filepath of files) {
  const text = readFileSync(filepath, { encoding: 'utf8' });
  const json = JSON.parse(text) as Props;
  // dataList.push(json);
  // const name = basename(filepath).replace('.tsx', '');
  // import文
  // console.log(`import { ${json.title}Demos } from '../src/mantine-demos/src/index';`);
  // component文
  console.log(`<Demo data={${json.title}Demos['${json.demoType}']} />`);
}
