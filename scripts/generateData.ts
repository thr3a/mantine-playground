import glob from "fast-glob";
import matter from 'gray-matter';
import {writeFile, readFile} from 'fs/promises';
import { Props } from '../features/demo/Props';
import {pascalCase, paramCase} from "change-case";

(async () => {
  const files = glob.sync([
    '/tmp/mantine/docs/src/docs/core/*.mdx',
    '/tmp/mantine/docs/src/docs/others/*.mdx',
  ]);

  const blacklist = [
    'Affix', // scroll to topボタン 不要
    'TypographyStylesProvider', // 不要
    'AppShell', // 不要
    'Portal', // 不要
    'Modals manager', // モーダル上位版 ページ表示がバグる
    'Rich text editor', //document is not defined quillでエラーになる
    'TransferList', // ビルドまでは出来るが表示バグる 要検証
    'Notifications system', // 不要
    'Prism code highlight', // 不要
  ];

  for (const filepath of files) {
    console.log(filepath);
    const fileBody = await readFile(filepath);
    const data = matter(fileBody).data as Props;
    if (blacklist.includes(data.title)) {
      continue;
    }
    // 命名規則が違うパターン
    if (data.title === 'Navigation progress') {
      data.title = 'NProgress';
    }

    if (fileBody.includes('.configurator} />')) {
      data.demoType = 'configurator';
    } else {
      data.demoType = 'usage';
    }
    // configuratorもusageも無い特殊パターン
    if (data.title === 'Space') {
      data.demoType = 'horizontal';
    }
    if (data.title === 'Code') {
      data.demoType = 'inline';
    }
    if (data.title === 'AspectRatio') {
      data.demoType = 'image';
    }
    if (data.title === 'Timeline') {
      data.demoType = 'usage';
    }
    data.title = pascalCase(data.title);
    data.group = paramCase(data.group);
    await writeFile(`./data/json/${data.title}.json`, JSON.stringify(data, null, 2));
  }
})();
