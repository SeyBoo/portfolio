import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TranslationProvider from '../common/hooks/useTranslation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}
