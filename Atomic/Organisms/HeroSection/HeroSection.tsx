import { Button, Spacer, Text } from 'Atomic/Atoms';
import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import styles from './HeroSection.module.scss';

interface IHeroSectionProps {
  title: string;
  text: string;
  ctaBtnText: string;
  ctaBtnUrl: string;
  secondaryBtnText: string;
  secondaryBtnUrl: string;
  img: string;
}

const HeroSection: React.FC<IHeroSectionProps> = ({
  title,
  text,
  ctaBtnText,
  ctaBtnUrl,
  secondaryBtnText,
  secondaryBtnUrl,
  img,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <Text
          varient='h1'
          color='white'
        >
          {title}
        </Text>
        <Spacer
          top='xs'
          bottom='md'
        >
          <Text
            varient='body2'
            color='white'
          >
            {text}
          </Text>
        </Spacer>
        <Button
          varient='cta'
          color='fill'
          href={ctaBtnUrl}
        >
          {ctaBtnText}
        </Button>
        <Spacer right='sm' />
        <Button
          varient='secondary'
          color='white'
          href={secondaryBtnUrl}
        >
          {secondaryBtnText}
          <BsArrowRight className='arrowIcon' />
        </Button>
      </div>
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <Image
            src={img}
            alt='photographger'
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
