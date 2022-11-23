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

// ##### DUMMY DATA #####
const navbarProps = {
  navItems: [
    { name: 'Home', url: '/' },
    { name: 'About us', url: '/about' },
    { name: 'Features', url: '/features' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
  ],
  btnText: 'Contact me',
  btnUrl: '/contact',
};

const heroSectionProps = {
  title: 'Capturing memories that will last a lifetime.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaBtnText: 'View my work',
  ctaBtnUrl: '/gallery',
  secondaryBtnText: 'View Pricing',
  secondaryBtnUrl: '/pricing',
  img: 'https://raw.githubusercontent.com/darylste/kf-photography/d7ffda2cac0dc1324771d647a2006a835d324163/public/assets/photographer.webp',
};
// ##### DUMMY DATA #####

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
      <Navbar {...navbarProps} />
      <HeroSection {...heroSectionProps} />
      <ProcessSection />
      <CollectionsSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}
