import type { NextPage } from 'next';
import { readFileSync } from 'fs';
import { GetStaticProps } from 'next';
import glob from "fast-glob";
import { DemoContainerGroup } from '../features/demo/components/DemoContainerGroup';
import { Props, ListProps } from '../features/demo/Props';
import { NextLink } from '@mantine/next';
import { Title, Group, Text, Space, Grid } from '@mantine/core';

type RootProps = {
  componentList: ListProps;
}

// NOTE: find ./data/json -name '*.json' | xargs jq -r .category | sort | uniq
const Home: NextPage<RootProps> = ({componentList}) => {
  return (
    <>
      <p>
        <Text component={NextLink} href='https://mantine.dev/' target='_blank' variant="link">
        Mantine UI
        </Text>
        のReactコンポーネント一覧
      </p>
      { ['typography', 'buttons', 'inputs', 'feedback', 'data-display', 'layout', 'navigation', 'overlay', 'misc'].map( (name, index) => {
        const items = componentList[`mantine-core_${name}`];
        return(
          <DemoContainerGroup
            group='mantine-core'
            subgroup={name}
            items={items}
            key={index}
          ></DemoContainerGroup>
        );
      })}
    </>
  );
};

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);

export const getStaticProps: GetStaticProps<RootProps> = (context) => {
  const files = glob.sync('data/json/*.json');
  const list: Props[] = [];
  for (const filepath of files) {
    const text = readFileSync(filepath, { encoding: 'utf8' });
    const json = JSON.parse(text) as Props;
    list.push(json);
  }

  const groupedList = groupBy(list, (x) => `${x.group}_${x.category || ''}`);

  return {
    props: {
      componentList: groupedList
    }
  };
};


export default Home;
