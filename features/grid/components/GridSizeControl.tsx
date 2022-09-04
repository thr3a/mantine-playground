import { NumberInput, Text } from '@mantine/core';
import { Props } from '../Props';

type PartProps = Pick<Props, 'gridSize' | 'setGridSize'>;

export const GridSizeControl = ({gridSize, setGridSize}: PartProps) => {
  return (
    <>
      <Text size="sm" weight={'bold'} style={{ marginBottom: 3 }}>
        グリッドサイズ
      </Text>
      <NumberInput
        min={1}
        max={12}
        defaultValue={gridSize}
        radius='xs'
        size="sm"
        onChange={(val:number) => setGridSize(val)}
      />
    </>
  );
};
