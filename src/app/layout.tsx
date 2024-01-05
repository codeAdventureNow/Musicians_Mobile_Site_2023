import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Musicians Mobile',
  description: 'Home Music Lessons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <UserProvider>
          <Nav />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
