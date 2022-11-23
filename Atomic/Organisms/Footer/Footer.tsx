import { Spacer, Text } from 'Atomic/Atoms';
import { Navigation } from 'Atomic/Molecules';
// import { Navigation } from 'Atomic/Molecules';
import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { MdCall, MdEmail } from 'react-icons/md';

import styles from './Footer.module.scss';

const navItems = [
  { name: 'Home', url: '/' },
  { name: 'About us', url: '/about' },
  { name: 'Features', url: '/features' },
  { name: 'Pricing', url: '/pricing' },
  { name: 'FAQ', url: '/faq' },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className='logo'>KF Photography</div>
          <Text
            varient='label2'
            color='white'
          >
            We are always open to discuss your project and improve your online
            presence.
          </Text>
          <div className={styles.banner}>
            <Text varient='label1'>Email me at</Text>
            <Text varient='label1'>Call me</Text>
            <Link href={'mailto:kfphotography@gmail.com'}>
              <Text varient='body1'>kfphotography@gmail.com</Text>
            </Link>
            <Link href={'/'}>
              <Text varient='body1'>07359 073096</Text>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <Text
            varient='h3'
            color='white'
          >
            Let&apos;s Talk!
          </Text>
          <Spacer
            top='2xs'
            bottom='sm'
          >
            <Text
              varient='body1'
              color='white'
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              voluptates, quidem iste mollitia deleniti ut.
            </Text>
          </Spacer>
          <div className={styles.socialIcons}>
            <BsFacebook
              color='fff'
              size={26}
            />
            <BsInstagram
              color='fff'
              size={26}
            />
            <MdEmail
              color='fff'
              size={26}
            />
            <MdCall
              color='fff'
              size={26}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Text varient='body2'>
          Copyright 2022 &#169;Kirsty Ferris Photography
        </Text>
        <Navigation
          background='light'
          items={navItems}
        />
      </div>
    </footer>
  );
};

export default Footer;
