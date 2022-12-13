import '@styles/globals.scss';

import { Footer, Navbar } from '@atomic';
import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';
import React from 'react';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  style: 'normal',
});

const navbarProps = {
  navItems: [
    { name: 'Home', url: '/' },
    { name: 'About us', url: '/about' },
    { name: 'Features', url: '/features' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
  ],
  btnText: 'Contact me',
  btnUrl: '/contact',
};

const footerProps = {
  title: "Let's talk!",
  mainText:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente voluptates, quidem iste mollitia deleniti ut.',
  sideText:
    'We are always open to discuss your project and improve your online presence.',
  facebookUrl: 'https://www.facebook.com',
  instagramUrl: 'https://www.instagram.com',
  emailAddress: 'kfphotography@gmail.com',
  phoneNumber: '07359 073096',
  navItems: [
    { name: 'Home', url: '/' },
    { name: 'About us', url: '/about' },
    { name: 'Features', url: '/features' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Navbar {...navbarProps} />
      <Component {...pageProps} />
      <Footer {...footerProps} />
    </main>
  );
}
