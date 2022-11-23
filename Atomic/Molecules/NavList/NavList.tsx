import { Text } from '@atomic';
import { navItem } from '@types';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './NavList.module.scss';

interface INavigationProps {
  background: 'dark' | 'light';
  items: navItem[];
}

const Navigation: React.FC<INavigationProps> = ({ background, items }) => {
  const router = useRouter();
  return (
    <ul className={styles.navList}>
      {items.map((item, i) => {
        const isCurrentPage = router.pathname === item.url ? true : false;
        return (
          <li
            className={cn(
              styles.navItem,
              background === 'light' ? `${styles.black}` : null,
              isCurrentPage ? `${styles.active}` : null,
            )}
            key={i}
          >
            <Text varient='body2'>
              <Link href={`${item.url}`}>{item.name}</Link>
            </Text>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
