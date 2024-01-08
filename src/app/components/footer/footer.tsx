'use client';

import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignupButton } from '../../components/buttons/signup-button';
import { LoginButton } from '../../components/buttons/login-button';
import { LogoutButton } from '../../components/buttons/logout-button';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Footer() {
  const { user } = useUser();
  const pathname = usePathname();

  const footerLinksMain = [
    {
      name: 'Careers',
      href: '/careers',
    },
  ];

  const footerLinksLegal = [
    {
      name: 'Terms Of Use',
      href: '/terms-of-use',
    },
    {
      name: 'Privacy Policy',
      href: '/privacy-policy',
    },
  ];

  const socialMediaLinks = [
    {
      href: 'https://www.facebook.com/musiciansmobile',
      src: '/images/facebook_icon.png',
      alt: 'facebook social media link',
    },
    {
      href: 'https://www.instagram.com/musiciansmobile/',
      src: '/images/instagram_icon.png',
      alt: 'instagram social media link',
    },
    {
      href: 'https://www.youtube.com/channel/UCgzb0Z2uKMQxmCRVR2dAY4Q',
      src: '/images/youtube_icon.png',
      alt: 'youtube social media link',
    },
    {
      href: 'https://www.yelp.com/biz/musicians-mobile-san-jose',
      src: '/images/yelp_icon.png',
      alt: 'yelp social media link',
    },
    {
      href: 'https://www.linkedin.com/company/musiciansmobile/',
      src: '/images/linked_in_icon.png',
      alt: 'linked in social media link',
    },
    {
      href: 'https://feeds.buzzsprout.com/1169933',
      src: '/images/podcast_icon.png',
      alt: 'podcast media link',
    },
  ];

  return (
    <footer className={styles.footer}>
      <ul className={styles.footer_nav}>
        {footerLinksMain.map((link) => {
          const isActiveLink = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                className={
                  isActiveLink
                    ? `${styles.nav_links} ${styles.link_active}`
                    : `${styles.nav_links}`
                }
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className={`${styles.footer_nav} ${styles.footer_navlegal}`}>
        {footerLinksLegal.map((link) => {
          const isActiveLink = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                className={
                  isActiveLink
                    ? `${styles.nav_links} ${styles.link_active}`
                    : `${styles.nav_links}`
                }
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {!user && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {user && (
        <>
          <LogoutButton />
        </>
      )}
      <ul className={styles.social_media_list}>
        {socialMediaLinks.map((link) => {
          return (
            <li key={link.src}>
              <Link target='_blank' href={link.href}>
                <Image
                  width={25}
                  height={25}
                  layout='intrinsic'
                  src={link.src}
                  alt={link.alt}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.logo_address}>
        <Link className={styles.logo} href='/'>
          <Image
            width={100}
            height={100}
            layout='intrinsic'
            src='/images/Logo.jpg'
            alt='musicians mobile logo'
          />
        </Link>
        <div className={styles.address}>
          <p>1276 Lincoln Ave, suite 109</p>
          <p>San Jose CA 95125</p>
        </div>
      </div>
    </footer>
  );
}
