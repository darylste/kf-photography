import { Spacer, Text } from 'Atomic/Atoms';
import Image from 'next/image';
import React from 'react';

import user from '../../../public/assets/random-user.jpeg';
import styles from './CarouselItem.module.scss';

const CarouselItem: React.FC = () => {
  return (
    <div className={styles.carouselItem}>
      <Text varient='h5'>
        &#34;The best agency we&apos;ve worked with so far. They understand our
        product and are able to add new features with a great focus.&#34;
      </Text>
      <Spacer top='md' />
      <div className={styles.bottom}>
        <div className={styles.user}>
          <div className={styles.userPicture}>
            <Image
              src={user}
              alt='user'
              fill
            />
          </div>
          <Text varient='label1'>Luana Peixoto</Text>
        </div>
        <div className={styles.controls}></div>
      </div>
    </div>
  );
};

export default CarouselItem;
