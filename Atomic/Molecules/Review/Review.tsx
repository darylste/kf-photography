import { Spacer, Text } from '@atomic';
import { IReviewProps } from '@types';
import Image from 'next/image';
import React from 'react';

import styles from './Review.module.scss';

const Review: React.FC<IReviewProps> = ({ text, authorName, authorImg }) => {
  return (
    <div className={styles.carouselItem}>
      <Text varient='h5'>&quot;{text}&quot;</Text>
      <Spacer top='md' />
      <div className={styles.bottom}>
        <div className={styles.user}>
          <div className={styles.userPicture}>
            <Image
              src={authorImg}
              alt={`${authorName}`}
              fill
            />
          </div>
          <Text varient='label1'>{authorName}</Text>
        </div>
        <div className={styles.controls}></div>
      </div>
    </div>
  );
};

export default Review;
