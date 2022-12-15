import '../styles/global.css';

import { createElement, useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import { NavBar } from '../components/NavBar';
import { prefix } from 'goober/prefixer';
import { setup } from 'goober';

// This could be the best place to define it once.
// Since `_app.js is running for both
setup(createElement, prefix);

export default function App({ Component, pageProps, router }: AppProps) {
  const url = `https://palmsandpaws.com${router.route}`;

  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#')) {
      setTimeout(() => {
        const id = path.replace('#', '');
        const el = window.document.getElementById(id);
        const r = el?.getBoundingClientRect();
        if (!r) return;
        window?.top?.scroll({
          top: pageYOffset + r.top,
          behavior: 'smooth',
        });
      }, 600);
    }
  });

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' type='image/png' />
      </Head>
      <DefaultSeo
        titleTemplate='%s - Palms & Paws'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: 'Palms & Paws',
          site_name: 'Palms & Paws',
          images: [],
        }}
        canonical={url}
      />
      <NavBar />
      <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
