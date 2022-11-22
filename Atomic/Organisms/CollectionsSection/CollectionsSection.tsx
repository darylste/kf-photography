import { Button, Spacer, Text } from 'Atomic/Atoms';
import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import weddingOne from '../../../public/assets/aleksandar-wedding.webp';
import weddingTwo from '../../../public/assets/derek-newborn.webp';
import babyOne from '../../../public/assets/gigin-newborn.webp';
import babyTwo from '../../../public/assets/jonathan-newborn.webp';
import weddingThree from '../../../public/assets/nathan-wedding.webp';
import weddingFour from '../../../public/assets/taylor-wedding.webp';
import styles from './CollectionsSection.module.scss';

const CollectionsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTop}>
        <Text varient='h2'>Recent photoshoots</Text>
        <Button
          varient='secondary'
          color='primary'
          href='/gallery'
        >
          View more <BsArrowRight size={28.5} />
        </Button>
      </div>
      <Spacer top='lg' />
      <div className={styles.grid}>
        <div className={styles.collection}>
          <Image
            src={weddingOne}
            alt='wedding one'
            fill
            objectFit='cover'
          />
          <div className={styles.cardText}>
            <Text varient='h6'>Linda and Fred&apos;s Wedding</Text>
            <Text varient='label2'>22/11/2022</Text>
          </div>
        </div>

        <div className={styles.collection}>
          <Image
            src={weddingFour}
            alt='wedding one'
            fill
            objectFit='cover'
          />
          <div className={styles.cardText}>
            <Text varient='h6'>Amanda&apos;s Wedding Shower</Text>
            <Text varient='label2'>29/02/2022</Text>
          </div>
        </div>

        <div className={styles.collection}>
          <Image
            src={weddingTwo}
            alt='wedding one'
            fill
            objectFit='cover'
          />
          <div className={styles.cardText}>
            <Text varient='h6'>The Lewis Family Photos</Text>
            <Text varient='label2'>06/03/2022</Text>
          </div>
        </div>

        <div className={styles.collection}>
          <Image
            src={babyOne}
            alt='wedding one'
            fill
            objectFit='cover'
          />
          <div className={styles.cardText}>
            <Text varient='h6'>Baby Joshua</Text>
            <Text varient='label2'>01/04/2022</Text>
          </div>
        </div>

        <div className={styles.collection}>
          <Image
            src={weddingThree}
            alt='wedding one'
            fill
            objectFit='cover'
          />
          <div className={styles.cardText}>
            <Text varient='h6'>Nathan and Lucy&apos;s Wedding</Text>
            <Text varient='label2'>13/08/2022</Text>
          </div>
        </div>

        <div className={styles.collection}>
          <Image
            src={babyTwo}
            alt='wedding one'
            fill
            objectFit='cover'
          />
          <div className={styles.cardText}>
            <Text varient='h6'>The Addison Family Photos</Text>
            <Text varient='label2'>11/07/2022</Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
