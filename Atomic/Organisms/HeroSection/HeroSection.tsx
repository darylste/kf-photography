import { Button, Spacer, Text } from 'Atomic/Atoms';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <Text
          varient='h1'
          color='white'
        >
          Capturing memories that will last a lifetime.
        </Text>
        <Spacer
          top='xs'
          bottom='md'
        >
          <Text
            varient='body2'
            color='white'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Text>
        </Spacer>
        <Button
          varient='cta'
          color='fill'
          href='/gallery'
        >
          View my work
        </Button>
        <Spacer right='sm' />
        <Button
          varient='secondary'
          color='white'
          href='/pricing'
        >
          View Pricing <BsArrowRight size={28.5} />
        </Button>
      </div>
      <div className={styles.right}></div>
    </section>
  );
};

export default HeroSection;
