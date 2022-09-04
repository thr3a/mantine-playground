import { SegmentedControl, Text } from '@mantine/core';
import { Props } from '../Props';
import type { MantineSize } from '@mantine/core';

type PartProps = Pick<Props, 'gutter' | 'setGutter'>;

export const GutterControl = ({gutter, setGutter}: PartProps) => {
  return (
    <>
      <Text size="sm" weight={'bold'} style={{ marginBottom: 3 }}>
          余白
      </Text>
      <SegmentedControl
        value={gutter}
        data={[
          { value: 'xs', label: 'xs' },
          { value: 'sm', label: 'sm' },
          { value: 'md', label: 'md' },
          { value: 'lg', label: 'lg' },
          { value: 'xl', label: 'xl' },
        ]}
        onChange={(val:string) => setGutter(val as MantineSize )}
      />
    </>
  );
};
