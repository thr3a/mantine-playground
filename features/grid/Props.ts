import type { Dispatch, SetStateAction } from 'react';
import type { MantineSize } from '@mantine/core';

export type Props = {
  gridSize: number
  setGridSize: Dispatch<SetStateAction<number>>
  isGrow: boolean
  setIsGrow: Dispatch<SetStateAction<boolean>>
  gutter: MantineSize
  setGutter: Dispatch<SetStateAction<MantineSize>>
  columnNum: number
  setColumnNum: Dispatch<SetStateAction<number>>
}
