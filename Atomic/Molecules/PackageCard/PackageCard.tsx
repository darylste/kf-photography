import { Button, Spacer, Text } from '@atomic';
import { IPackageCardProps } from '@types';
import cn from 'classnames';
import React from 'react';

import styles from './PackageCard.module.scss';

const PackageCard: React.FC<IPackageCardProps> = ({
  varient = 'standard',
  price,
  title,
  description,
  list,
}) => {
  return (
    <div
      className={cn(
        styles.card,
        varient === 'standard' ? styles.standard : null,
      )}
    >
      <Text varient='h3'>£{price}</Text>
      <Text varient='h6'>{title}</Text>
      <Spacer
        top='3xs'
        bottom='xs'
      >
        <Text varient='body2'>{description}</Text>
      </Spacer>
      <ul className={styles.list}>
        {list.map((item, key) => (
          <li
            key={key}
            className={styles.listItem}
          >
            {item}
          </li>
        ))}
      </ul>
      <Spacer top='lg' />
      <Button
        href='/contact'
        varient='cta'
        color='outline'
      >
        Select a date
      </Button>
    </div>
  );
};

export default PackageCard;
