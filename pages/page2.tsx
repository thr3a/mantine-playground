import type { NextPage } from 'next';
import Head from 'next/head';
import { IconDownload } from '@tabler/icons';
import styles from '../styles/Home.module.scss';
import { FormComponent } from '../features/form/components/FromComponents';
import { Viewer } from '../features/form/components/Viewer';

const Page2: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page 2</title>
      </Head>
      <h1 className={styles.title}>Page 2</h1>
      <IconDownload></IconDownload>
      <FormComponent></FormComponent>
      <FormComponent></FormComponent>
      <Viewer></Viewer>
    </>
  );
};

export default Page2;
