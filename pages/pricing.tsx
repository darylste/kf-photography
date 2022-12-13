import { PricingSection } from '@atomic';
import { IPricingSectionProps } from '@types';
import Head from 'next/head';
import React from 'react';

const pricingSectionProps: IPricingSectionProps = {
  title: 'Our Packages',
  text: "We offer a range of premade packages that can be tailored to your ocassion. If you're looking for a custom package please contact me at $$EMAIL_ADDRESS$$ or via $$FACEBOOK_LINK$$.",
  cards: [
    {
      varient: 'standard',
      price: 299,
      title: 'Standard Package',
      description:
        'Our standard package is great for newborn or birthday photoshoots.',
      list: [
        'One hour photoshoot',
        '15 high quality photographs on USB drive',
        '3 high quality prints',
      ],
    },
    {
      varient: 'standard',
      price: 499,
      title: 'Premium Package',
      description:
        'Our standard package is great for newborn or birthday photoshoots.',
      list: [
        'One hour photoshoot',
        '15 high quality photographs on USB drive',
        '3 high quality prints',
        '15 high quality photographs on USB drive',
        '3 high quality prints',
      ],
    },
    {
      varient: 'standard',
      price: 699,
      title: 'Premium+ Package',
      description:
        'Our standard package is great for newborn or birthday photoshoots.',
      list: [
        'One hour photoshoot',
        '15 high quality photographs on USB drive',
        '3 high quality prints',
        'One hour photoshoot',
        '15 high quality photographs on USB drive',
        '3 high quality prints',
      ],
    },
  ],
};

const Pricing = () => {
  return (
    <div>
      <Head>
        <title>KF Photography - Pricing</title>
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
      <PricingSection {...pricingSectionProps} />
    </div>
  );
};

export default Pricing;
