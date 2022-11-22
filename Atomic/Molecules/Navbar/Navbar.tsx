import { Button, Text } from '@atomic';
import Link from 'next/link';
import React from 'react';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className='logo'>KF Photography</div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.active}`}>
            <Text varient='body2'>
              <Link href={'/'}>Home</Link>
            </Text>
          </li>
          <li className={styles.navItem}>
            <Text varient='body2'>
              <Link href={'/about'}>About</Link>
            </Text>
          </li>
          <li className={styles.navItem}>
            <Text varient='body2'>
              <Link href={'/features'}>Features</Link>
            </Text>
          </li>
          <li className={styles.navItem}>
            <Text varient='body2'>
              <Link href={'/pricing'}>Pricing</Link>
            </Text>
          </li>
          <li className={styles.navItem}>
            <Text varient='body2'>
              <Link href={'/faq'}>FAQ</Link>
            </Text>
          </li>
          <li className={styles.navItem}>
            <Text varient='body2'>
              <Link href={'/gallery'}>Gallery</Link>
            </Text>
          </li>
        </ul>
        <Button
          varient='cta'
          color='outline'
          href='/'
        >
          Contact us
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
