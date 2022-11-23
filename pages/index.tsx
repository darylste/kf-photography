import {
  CollectionsSection,
  Footer,
  HeroSection,
  Navbar,
  ProcessSection,
  ReviewSection,
} from '@atomic';
import styles from '@styles/Home.module.scss';
import Head from 'next/head';
import React from 'react';

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
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <CollectionsSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}
