import Head from 'next/head';
import React from 'react';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KF Photography</title>
        <meta
          name='description'
          content='Kirsty Ferris Photography offers family, baby and event photography in Glasgow.'
        />
      </Head>
      <p>Home Page</p>
    </div>
  );
}
