import { chromium } from 'playwright';
import glob from "fast-glob";
import matter from 'gray-matter';
import {writeFile} from 'fs/promises';
import { Props } from '../features/demo/Props';

(async () => {
  const browser = await chromium.launch({});
  const page = await browser.newPage();

  const files = glob.sync('/home/thr3a/work/mantine/docs/src/docs/core/*.mdx');

  const blacklist = [
    'Affix',
    'TypographyStylesProvider',
    'AppShell'
  ];

  for (const filepath of files) {
    const data = matter.read(filepath).data as Props;
    if (blacklist.includes(data.title)) {
      continue;
    }
    await writeFile(`./data/${data.title}.json`, JSON.stringify(data, null, 2));

    const url = `https://mantine.dev${data.slug}`;
    await page.goto(url);

    const componentFilepath = `./code/${data.title}.tsx`;

    try {
      const code = await page.$eval('.mantine-Prism-root:nth-child(2) pre', (el) => (el as HTMLElement).innerText);
      const modifiedCode = code.replace('function Demo() {', `export default function ${data.title}Demo() {`);
      // 何故か出力しないと改行がバグる
      console.log(modifiedCode);
      await writeFile(componentFilepath, modifiedCode);
    } catch(error) {
      console.log(data.title, error);
    }
  }

  await browser.close();
})();
