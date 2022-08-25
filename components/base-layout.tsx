import Head from 'next/head';
import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Rube Servidor - A Lean Cloud Server</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
