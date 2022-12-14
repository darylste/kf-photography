import {
  CollectionsSection,
  HeroSection,
  ProcessSection,
  ReviewSection,
} from '@atomic';
import styles from '@styles/Home.module.scss';
import Head from 'next/head';
import React from 'react';

// ##### DUMMY DATA #####
const heroSectionProps = {
  title: 'Capturing memories that will last a lifetime.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaBtnText: 'View my work',
  ctaBtnUrl: '/gallery',
  secondaryBtnText: 'View Pricing',
  secondaryBtnUrl: '/pricing',
  img: 'https://raw.githubusercontent.com/darylste/kf-photography/d7ffda2cac0dc1324771d647a2006a835d324163/public/assets/photographer.webp',
};

const processSectionProps = {
  title: 'How we work',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  btnText: 'Book your photoshoot',
  btnUrl: '/contact',
  processSteps: [
    {
      stepTitle: 'Create a package',
      stepText:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
    },
    {
      stepTitle: 'Reserve your date',
      stepText:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
    },
    {
      stepTitle: 'Enjoy the day',
      stepText:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
    },
    {
      stepTitle: 'Recieve your photos',
      stepText:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
    },
  ],
};

const collectionSectionProps = {
  title: 'Recent photoshoots',
  btnText: 'View more',
  btnUrl: '/gallery',
  collections: [
    {
      title: "Linda and Fred's Wedding",
      date: '22/11/2022',
      imgUrl:
        'https://raw.githubusercontent.com/darylste/kf-photography/b5a79547a407ae56e7191f81c1a508f898731615/public/assets/aleksandar-wedding.webp',
      imgAlt: 'Linda and Fred',
    },
    {
      title: "Amanda's Wedding Shower",
      date: '29/02/2022',
      imgUrl:
        'https://raw.githubusercontent.com/darylste/kf-photography/b5a79547a407ae56e7191f81c1a508f898731615/public/assets/taylor-wedding.webp',
      imgAlt: 'Amanda',
    },
    {
      title: 'The Lewis Family Photos',
      date: '06/03/2022',
      imgUrl:
        'https://raw.githubusercontent.com/darylste/kf-photography/b5a79547a407ae56e7191f81c1a508f898731615/public/assets/derek-newborn.webp',
      imgAlt: 'The Lewis Family',
    },
    {
      title: 'Baby Joshua',
      date: '01/04/2022',
      imgUrl:
        'https://raw.githubusercontent.com/darylste/kf-photography/b5a79547a407ae56e7191f81c1a508f898731615/public/assets/gigin-newborn.webp',
      imgAlt: 'Baby Joshua',
    },
    {
      title: "Nathan and Lucy's Wedding",
      date: '13/08/2022',
      imgUrl:
        'https://raw.githubusercontent.com/darylste/kf-photography/b5a79547a407ae56e7191f81c1a508f898731615/public/assets/nathan-wedding.webp',
      imgAlt: 'Nathan and Lucy',
    },
    {
      title: 'The Addison Family Photos',
      date: '11/07/2022',
      imgUrl:
        'https://raw.githubusercontent.com/darylste/kf-photography/b5a79547a407ae56e7191f81c1a508f898731615/public/assets/jonathan-newborn.webp',
      imgAlt: 'The Addison Family',
    },
  ],
};

const reviewSectionProps = {
  title: 'What our clients say',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.',
  reviews: [
    {
      text: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus",
      authorName: 'Luana Peixoto',
      authorImg:
        'https://raw.githubusercontent.com/darylste/kf-photography/dc63d21424f69ef98ebbcc587b38e6e913426331/public/assets/random-user.jpeg',
    },
    {
      text: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus",
      authorName: 'Luana Peixoto',
      authorImg:
        'https://raw.githubusercontent.com/darylste/kf-photography/dc63d21424f69ef98ebbcc587b38e6e913426331/public/assets/random-user.jpeg',
    },
    {
      text: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus",
      authorName: 'Luana Peixoto',
      authorImg:
        'https://raw.githubusercontent.com/darylste/kf-photography/dc63d21424f69ef98ebbcc587b38e6e913426331/public/assets/random-user.jpeg',
    },
  ],
};
// ##### DUMMY DATA #####

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KF Photography</title>
        <meta
          name='description'
          content='Kirsty Ferris Photography is a Glasgow based family/events photographer. We can create the perfect package for you and capture memories that last a lifetime.'
        />
        <meta
          name='author'
          content='https://www.daryl-stensland.com/'
        />
        <meta
          name='robots'
          content='index, follow'
        />
      </Head>
      <HeroSection {...heroSectionProps} />
      <ProcessSection {...processSectionProps} />
      <CollectionsSection {...collectionSectionProps} />
      <ReviewSection {...reviewSectionProps} />
    </div>
  );
}
