import { Grid, Box } from '@mantine/core';
import { Props } from '../Props';

type PartProps = Pick<Props, 'isGrow' | 'gutter' | 'columnNum'| 'gridSize'>;

export const GridBox = ( props: PartProps) => {
  return (
    <Grid grow={ props.isGrow } gutter={ props.gutter } columns={ props.columnNum }>
      {[1,2,3,4,5,6,7,8].map((index) => (
        <Grid.Col span={props.gridSize} key={index}>
          <Box
            sx={(theme) => ({
              backgroundColor: theme.colors.blue[3],
              textAlign: 'center',
            })}
          >
            { String(index) }
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
};
