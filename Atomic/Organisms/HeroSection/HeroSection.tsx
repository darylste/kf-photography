import { Button, Spacer, Text } from 'Atomic/Atoms';
import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import photographer from '../../../public/assets/photographer.webp';
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
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <Image
            src={photographer}
            alt='photographger'
            fill
            objectFit='cover'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
