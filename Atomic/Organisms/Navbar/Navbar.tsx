import { Button, Logo, NavList, Spacer } from '@atomic';
import { navItem } from '@types';
import React from 'react';

import styles from './Navbar.module.scss';

interface INavbarProps {
  navItems: navItem[];
  btnText: string;
  btnUrl: string;
}

const Navbar: React.FC<INavbarProps> = ({ navItems, btnText, btnUrl }) => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <nav className={styles.nav}>
        <NavList
          background='dark'
          items={navItems}
        />
        <Spacer left='md' />
        <Button
          varient='cta'
          color='outline'
          href={btnUrl}
        >
          {btnText}
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
