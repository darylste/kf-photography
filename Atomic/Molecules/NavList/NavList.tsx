import { Button, Spacer, Text } from '@atomic';
import { navItem } from '@types';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import exitIcon from '../../../public/assets/icons/exit.svg';
import hamburgerIcon from '../../../public/assets/icons/hamburger.svg';
import styles from './NavList.module.scss';
interface INavigationProps {
  background: 'dark' | 'light';
  items: navItem[];
}

const Navigation: React.FC<INavigationProps> = ({ background, items }) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <React.Fragment>
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
      <Image
        className={styles.hamburgerIcon}
        onClick={() => setIsNavOpen(true)}
        src={hamburgerIcon}
        alt='hamburger icon'
      />
      {isNavOpen && (
        <div className={styles.mobileNav}>
          <div className={styles.mobileTop}>
            <Image
              className={styles.exitIcon}
              onClick={() => setIsNavOpen(false)}
              src={exitIcon}
              alt={'exit icon'}
            />
            <Spacer left='md' />
            <Button
              varient='cta'
              color='outline'
              href={'/contact'}
            >
              {'Contact me'}
            </Button>
          </div>
          <div className={styles.mobileMain}>
            {items.map((item, i) => {
              const isCurrentPage = router.pathname === item.url ? true : false;

              return (
                <Link
                  href={`${item.url}`}
                  key={i}
                  onClick={() => setIsNavOpen(false)}
                  className={cn(
                    styles.mobileNavItem,
                    background === 'light' ? `${styles.black}` : null,
                    isCurrentPage ? `${styles.active}` : null,
                  )}
                >
                  <Text varient='h1'>{item.name}</Text>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navigation;
