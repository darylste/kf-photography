import { Button, Spacer, Text } from 'Atomic/Atoms';
import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import styles from './CollectionsSection.module.scss';

interface ICollectionProps {
  title: string;
  date: string;
  imgUrl: string;
  imgAlt: string;
}

interface ICollectionSectionProps {
  title: string;
  btnText: string;
  btnUrl: string;
  collections: ICollectionProps[];
}

const CollectionsSection: React.FC<ICollectionSectionProps> = ({
  title,
  btnText,
  btnUrl,
  collections,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTop}>
        <Text varient='h2'>{title}</Text>
        <Button
          varient='secondary'
          color='primary'
          href={`${btnUrl}`}
        >
          {btnText}
          <BsArrowRight size={28.5} />
        </Button>
      </div>
      <Spacer top='lg' />
      <div className={styles.grid}>
        {collections.map((collection, i) => (
          <div
            className={styles.collection}
            key={i}
          >
            <Image
              src={collection.imgUrl}
              alt={`${collection.imgAlt}`}
              fill
              objectFit='cover'
            />
            <div className={styles.cardText}>
              <Text varient='h6'>{collection.title}</Text>
              <Text varient='label2'>{collection.date}</Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsSection;
