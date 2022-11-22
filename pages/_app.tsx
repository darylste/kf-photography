import '@styles/globals.scss';

import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';
import React from 'react';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  style: 'normal',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
