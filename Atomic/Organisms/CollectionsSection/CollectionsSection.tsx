import { Button, Spacer, Text } from '@atomic';
import { ICollectionProps } from '@types';
import Collection from 'Atomic/Molecules/Collection/Collection';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import styles from './CollectionsSection.module.scss';
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
          <BsArrowRight className='arrowIcon' />
        </Button>
      </div>
      <Spacer top='lg' />
      <div className={styles.grid}>
        {collections.map((collection, i) => (
          <Collection
            key={i}
            {...collection}
            i={i}
          />
        ))}
      </div>
    </section>
  );
};

export default CollectionsSection;
