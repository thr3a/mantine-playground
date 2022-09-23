import { Title, Divider, Grid } from '@mantine/core';
import { Props } from '../Props';
import { DemoContainer } from './DemoContainer';

type DemoContainerProps = {
  items: Props[];
  group: string,
  subgroup?: string
}

export const DemoContainerGroup = ( {items, group, subgroup}: DemoContainerProps) => {
  return (
    <>
      { items.map((item) => {
        return (
          <DemoContainer {...item} key={item.title}></DemoContainer>
        );
      })}
      <Divider my="md" />
    </>
  );
};
