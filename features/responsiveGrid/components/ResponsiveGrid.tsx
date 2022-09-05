import { Grid, Box, Table, Text } from '@mantine/core';

type Props = {
  label: string
}

const brakePoints = [
  {name: "xs", px: 500},
  {name: 'sm', px: 800},
  {name: 'md', px:1000},
  {name: 'lg', px: 1200},
  {name: 'xl', px: 1400},
];

const MyBox = ({label}: Props) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.blue[3],
        textAlign: 'center',
      })}
    > { label }
    </Box>
  );
};

const rows = brakePoints.map((data) => (
  <tr key={data.name}>
    <td>{data.name}</td>
    <td>{data.px}px</td>
  </tr>
));



export const ResponsiveGrid = () => {
  return (
    <>
      <Grid>
        <Grid.Col md={3}>
          <Table>
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Width</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Grid.Col>
      </Grid>

      <Text>絶対に守りたいならspan</Text>

      <Grid>
        <Grid.Col span={6}>
          <MyBox label='span=6'></MyBox>
        </Grid.Col>
        <Grid.Col span={6}>
          <MyBox label='span=6'></MyBox>
        </Grid.Col>
      </Grid>

      <Text>スマホ対応するならsm指定</Text>

      <Grid>
        <Grid.Col sm={3}>
          <MyBox label='sm=3'></MyBox>
        </Grid.Col>
        <Grid.Col sm={6}>
          <MyBox label='sm=6'></MyBox>
        </Grid.Col>
      </Grid>
    </>
  );
};
