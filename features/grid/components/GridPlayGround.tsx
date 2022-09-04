import { GridBox } from './GridBox';
import { GridGrowSwitch } from './GridGrowSwitch';
import { Grid, Divider } from '@mantine/core';
import { useState } from 'react';
import { GridSizeControl } from './GridSizeControl';
import { GutterControl } from './GutterControl';
import { ColumnNumControl } from './ColumnNumControl';
import type { MantineSize } from '@mantine/core';

export const GridPlayGround = () => {

  const [gridSize, setGridSize] = useState(1);
  const [isGrow, setIsGrow] = useState(false);
  const [gutter, setGutter] = useState('md' as MantineSize);
  const [columnNum, setColumnNum] = useState(12);

  return (
    <>
      <Grid>
        <Grid.Col span={2}>
          <GridSizeControl gridSize={gridSize} setGridSize={setGridSize}></GridSizeControl>
        </Grid.Col>
        <Grid.Col span={2}>
          <ColumnNumControl columnNum={columnNum} setColumnNum={setColumnNum}></ColumnNumControl>
        </Grid.Col>
        <Grid.Col span={4}>
          <GutterControl gutter={gutter} setGutter={setGutter}></GutterControl>
        </Grid.Col>
      </Grid>
      <Grid grow>
        <Grid.Col>
          <GridGrowSwitch isGrow={isGrow} setIsGrow={setIsGrow}></GridGrowSwitch>
        </Grid.Col>
      </Grid>
      <Divider my="sm" />
      <h4>結果</h4>
      <GridBox gutter={gutter} isGrow={isGrow} gridSize={gridSize} columnNum={columnNum}></GridBox>
    </>
  );
};
