import type { NextPage } from 'next';
// import { NextLink } from '@mantine/next';
import { Divider } from '@mantine/core';
import { GridPlayGround } from '../features/grid/components/GridPlayGround';
import { ResponsiveGrid } from '../features/responsiveGrid/components/ResponsiveGrid';

const Home: NextPage = () => {
  return (
    <>
      <p>MantineのGrid機能を色々遊べる場所</p>
      <h1>PlayGround</h1>
      <GridPlayGround></GridPlayGround>
      <Divider my="sm" />
      <h1>Responsive</h1>
      <ResponsiveGrid></ResponsiveGrid>
    </>
  );
};

export default Home;
