import type { AppProps } from 'next/app';
import BaseLayout from '../components/base-layout';

export default function TheApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
