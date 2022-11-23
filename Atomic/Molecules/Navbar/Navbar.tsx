import { Button } from '@atomic';
import { Spacer } from 'Atomic/Atoms';
import React from 'react';

import Navigation from '../Navigation/Navigation';
import styles from './Navbar.module.scss';

const navItems = [
  { name: 'Home', url: '/' },
  { name: 'About us', url: '/about' },
  { name: 'Features', url: '/features' },
  { name: 'Pricing', url: '/pricing' },
  { name: 'FAQ', url: '/faq' },
];

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className='logo'>KF Photography</div>

      <nav className={styles.nav}>
        <Navigation
          background='dark'
          items={navItems}
        />
        <Spacer left='md' />
        <Button
          varient='cta'
          color='outline'
          href='/contact'
        >
          Contact us
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
