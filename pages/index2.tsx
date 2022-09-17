import type { NextPage } from 'next';
import {readFile} from 'fs/promises';
import { GetStaticProps } from 'next';
import glob from "fast-glob";
import { DemoContainer } from '../features/demo/components/DemoContainer';
import dynamic from 'next/dynamic';

const a = [
  {
    "group": "mantine-core",
    "package": "@mantine/core",
    "title": "UnstyledButton",
    "order": 1,
    "slug": "/core/unstyled-button/",
    "category": "buttons",
    "description": "Unstyled polymorphic button",
    "import": "import { UnstyledButton } from '@mantine/core';",
    "source": "mantine-core/src/UnstyledButton/UnstyledButton.tsx",
    "docs": "core/UnstyledButton.mdx",
    "component": dynamic(() => import('../scripts/code/UnstyledButton'))
  }
];

const Home: NextPage = (props:any) => {
  return (
    <>
      <p>MantineのGrid機能を色々遊べる場所</p>
      { a.map((item: any) => {
        const NewComponent = item.component;
        return (
          <DemoContainer {...item} key={item.slug}>
            <NewComponent></NewComponent>
          </DemoContainer>
        );
      })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const files = glob.sync('scripts/data/*.json');
  const ary = [];
  for (const filepath of files) {
    const json = await readFile(filepath, { encoding: 'utf8' });
    ary.push(JSON.parse(json));
  }

  return { props: { ary } };
};


export default Home;
