import { Title, Divider } from '@mantine/core';
import { Props } from '../Props';
import { DemoContainer } from './DemoContainer';
import dynamic from 'next/dynamic';

type DemoContainerProps = {
  items: Props[];
  group: string,
  subgroup?: string
}

export const DemoContainerGroup = ( {items, group, subgroup}: DemoContainerProps) => {
  return (
    <>
      <Title order={2}>{group} / {subgroup}</Title>
      { items.map((item) => {
        const NewComponent = dynamic(() => import(`../../../data/code/${item.title}`));
        return (
          <DemoContainer {...item} key={item.slug}>
            <NewComponent></NewComponent>
          </DemoContainer>
        );
      })}
      <Divider my="md" />
    </>
  );
};
