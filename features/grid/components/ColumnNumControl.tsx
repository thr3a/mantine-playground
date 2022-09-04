import { NumberInput, Text } from '@mantine/core';
import { Props } from '../Props';

type PartProps = Pick<Props, 'columnNum' | 'setColumnNum'>;

export const ColumnNumControl = ({columnNum, setColumnNum}: PartProps) => {
  return (
    <>
      <Text size="sm" weight={'bold'} style={{ marginBottom: 3 }}>
        列数
      </Text>
      <NumberInput
        min={1}
        defaultValue={columnNum}
        radius='xs'
        size="sm"
        onChange={(val:number) => setColumnNum(val)}
      />
    </>
  );
};
