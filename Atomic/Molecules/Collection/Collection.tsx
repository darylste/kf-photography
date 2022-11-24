import { Text } from '@atomic';
import Image from 'next/image';
import React from 'react';

import styles from './Collection.module.scss';

interface ICollectionProps {
  title: string;
  date: string;
  imgUrl: string;
  imgAlt: string;
  i: number;
}

const Collection: React.FC<ICollectionProps> = ({
  title,
  date,
  imgUrl,
  imgAlt,
  i,
}) => {
  return (
    <div
      className={styles.collection}
      key={i}
    >
      <Image
        src={imgUrl}
        alt={`${imgAlt}`}
        fill
        objectFit='cover'
      />
      <div className={styles.cardText}>
        <Text varient='h6'>{title}</Text>
        <Text varient='label2'>{date}</Text>
      </div>
    </div>
  );
};

export default Collection;
