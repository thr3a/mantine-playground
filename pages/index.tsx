import type { NextPage } from 'next';
import { NextLink } from '@mantine/next';
import { Button } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <>
      <Button component={NextLink} href="/page2">page2</Button>
    </>
  );
};

export default Home;
