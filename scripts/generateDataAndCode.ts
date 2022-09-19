import { chromium } from 'playwright';
import glob from "fast-glob";
import matter from 'gray-matter';
import {writeFile} from 'fs/promises';
import { Props } from '../features/demo/Props';
import {pascalCase, paramCase} from "change-case";

(async () => {
  const browser = await chromium.launch({});
  const page = await browser.newPage();

  const files = glob.sync([
    '/tmp/mantine/docs/src/docs/core/*.mdx',
    '/tmp/mantine/docs/src/docs/dates/*.mdx',
    '/tmp/mantine/docs/src/docs/others/*.mdx',
  ]);

  const blacklist = [
    'Affix', // scroll to topボタン ページ表示がバグる
    'TypographyStylesProvider', // ページ表示がバグる
    'AppShell', // header and navbar ページ表示がバグる
    'Portal', // 取得不可
    'Modals manager', // モーダル上位版 ページ表示がバグる
    'Dropzone', // D&D 取得がバグる
    'Getting started', // 不要
  ];

  for (const filepath of files) {
    console.log(filepath);
    const data = matter.read(filepath).data as Props;
    if (blacklist.includes(data.title)) {
      continue;
    }
    data.title = pascalCase(data.title);
    data.group = paramCase(data.group);
    await writeFile(`./data/json/${data.title}.json`, JSON.stringify(data, null, 2));

    const url = `https://mantine.dev${data.slug}`;
    await page.goto(url);

    const componentFilepath = `./data/code/${data.title}.tsx`;

    await page.waitForSelector('.mantine-Prism-root:nth-child(2) pre');
    const code = await page.$eval('.mantine-Prism-root:nth-child(2) pre', (el) => (el as HTMLElement).innerText);
    const modifiedCode = code.replaceAll('function Demo() {', `export default function ${data.title}Demo() {`);
    await writeFile(componentFilepath, modifiedCode);
  }

  await browser.close();
})();
// cat scripts/tableFix.js data/code/Table.tsx > /tmp/a && cat /tmp/a > data/code/Table.tsx
