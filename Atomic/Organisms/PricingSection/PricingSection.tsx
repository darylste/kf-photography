import { Spacer, Text } from '@atomic';
import { IPricingSectionProps } from '@types';
import PackageCard from 'Atomic/Molecules/PackageCard/PackageCard';
import React from 'react';

import styles from './PricingSection.module.scss';

const PricingSection: React.FC<IPricingSectionProps> = ({
  title,
  text,
  cards,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <Text varient='h2'>{title}</Text>
        <Spacer top='2xs' />
        <Text varient='body2'>{text}</Text>
      </div>
      <Spacer top='lg' />
      <div className={styles.cardContainer}>
        {cards.map((item, index) => (
          <PackageCard
            key={index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
