import { Logo, NavList, Spacer, Text } from '@atomic';
import { navItem } from '@types';
import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { MdCall, MdEmail } from 'react-icons/md';

import styles from './Footer.module.scss';

interface IFooterProps {
  title: string;
  mainText: string;
  sideText: string;
  facebookUrl: string;
  instagramUrl: string;
  emailAddress: string;
  phoneNumber: string;
  navItems: navItem[];
}

const Footer: React.FC<IFooterProps> = ({
  title,
  mainText,
  sideText,
  facebookUrl,
  instagramUrl,
  emailAddress,
  phoneNumber,
  navItems,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.left}>
          <Logo />
          <Spacer top='3xs' />
          <Text
            varient='label2'
            color='white'
          >
            {sideText}
          </Text>
          <div className={styles.banner}>
            <Text varient='label1'>Email me at</Text>
            <Text varient='label1'>Call me</Text>
            <Link href={`mailto:${emailAddress}`}>
              <Text varient='body1'>{emailAddress}</Text>
            </Link>
            <Link href={`tel:${phoneNumber}`}>
              <Text varient='body1'>{phoneNumber}</Text>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <Text
            varient='h3'
            color='white'
          >
            {title}
          </Text>
          <Spacer
            top='2xs'
            bottom='sm'
          >
            <Text
              varient='body1'
              color='white'
            >
              {mainText}
            </Text>
          </Spacer>
          <div className={styles.socialIcons}>
            <Link
              href={`${facebookUrl}`}
              target='_blank'
            >
              <BsFacebook
                color='fff'
                size={26}
              />
            </Link>
            <Link
              href={`${instagramUrl}`}
              target='_blank'
            >
              <BsInstagram
                color='fff'
                size={26}
              />
            </Link>
            <Link href={`mailto:${emailAddress}`}>
              <MdEmail
                color='fff'
                size={26}
              />
            </Link>
            <Link href={`tel:${phoneNumber}`}>
              <MdCall
                color='fff'
                size={26}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Text varient='body2'>
          Copyright 2022 &#169;Kirsty Ferris Photography
        </Text>
        <NavList
          background='light'
          items={navItems}
        />
      </div>
    </footer>
  );
};

export default Footer;
