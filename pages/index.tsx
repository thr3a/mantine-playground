import type { NextPage } from 'next';
// import { NextLink } from '@mantine/next';
// import { Button, Grid, Container } from '@mantine/core';
import { GridPlayGround } from '../features/grid/components/GridPlayGround';

const Home: NextPage = () => {
  return (
    <>
      <p>MantineのGrid機能を色々遊べる場所</p>
      <GridPlayGround></GridPlayGround>
    </>
  );
};

export default Home;
