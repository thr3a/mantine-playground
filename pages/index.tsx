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
const Home: NextPage<RootProps> = ({componentList}) => {
  return (
    <>
      <p>
        <Text component={NextLink} href='https://mantine.dev/' target='_blank' variant="link">
        Mantine UI
        </Text>
        のReactコンポーネント間一覧
      </p>
      <DemoContainerGroup
        group='mantine-core'
        subgroup='inputs'
        items={componentList['mantine-core_inputs']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='mantine-core'
        subgroup='layout'
        items={componentList['mantine-core_layout']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='mantine-core'
        subgroup='buttons'
        items={componentList['mantine-core_buttons']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='mantine-core'
        subgroup='data-display'
        items={componentList['mantine-core_data-display']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='mantine-core'
        subgroup='feedback'
        items={componentList['mantine-core_feedback']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='mantine-core'
        subgroup='navigation'
        items={componentList['mantine-core_navigation']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='mantine-core'
        subgroup='misc'
        items={componentList['mantine-core_misc']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='mantine-core'
        subgroup='overlay'
        items={componentList['mantine-core_overlay']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='mantine-core'
        subgroup='typography'
        items={componentList['mantine-core_typography']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='mantine-dates'
        items={componentList['mantine-dates_']}
      ></DemoContainerGroup>
      <DemoContainerGroup
        group='other-packages'
        items={componentList['other-packages_']}
      ></DemoContainerGroup>
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
