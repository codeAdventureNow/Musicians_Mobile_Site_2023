'use client';

import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const footerLinksMain = [
    {
      name: 'Careers',
      href: '/careers',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
  ];

  const footerLinksLegal = [
    {
      name: 'Terms & Conditions',
      href: '/terms_conditions',
    },
    {
      name: 'Privacy Policy',
      href: '/privacy_policy',
    },
  ];

  return (
    <footer className={styles.footer}>
      <ul className={styles.footer_nav}>
        {footerLinksMain.map((link) => {
          const isActiveLink = pathname === link.href;

          return (
            <li>
              <Link
                className={
                  isActiveLink
                    ? `${styles.nav_links} ${styles.link_active}`
                    : `${styles.nav_links}`
                }
                href={link.href}
                key={link.name}
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
            <li>
              <Link
                className={
                  isActiveLink
                    ? `${styles.nav_links} ${styles.link_active}`
                    : `${styles.nav_links}`
                }
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className={styles.social_media_list}>
        <li>
          <Link target='_blank' href='https://www.facebook.com/musiciansmobile'>
            <Image
              width={25}
              height={25}
              layout='intrinsic'
              src='/images/facebook_icon.png'
              alt='facebook social media link'
            />
          </Link>
          <Link
            target='_blank'
            href='https://www.instagram.com/musiciansmobile/'
          >
            <Image
              width={25}
              height={25}
              layout='intrinsic'
              src='/images/instagram_icon.png'
              alt='instagram social media link'
            />
          </Link>
          <Link
            target='_blank'
            href='https://www.youtube.com/channel/UCgzb0Z2uKMQxmCRVR2dAY4Q'
          >
            <Image
              width={25}
              height={25}
              layout='intrinsic'
              src='/images/youtube_icon.png'
              alt='youtube social media link'
            />
          </Link>
          <Link
            target='_blank'
            href='https://www.yelp.com/biz/musicians-mobile-san-jose'
          >
            <Image
              width={25}
              height={25}
              layout='intrinsic'
              src='/images/yelp_icon.png'
              alt='yelp social media link'
            />
          </Link>
          <Link
            target='_blank'
            href='https://www.linkedin.com/company/musiciansmobile/'
          >
            <Image
              width={25}
              height={25}
              layout='intrinsic'
              src='/images/linked_in_icon.png'
              alt='linked in social media link'
            />
          </Link>
          <Link target='_blank' href='https://feeds.buzzsprout.com/1169933'>
            <Image
              width={25}
              height={25}
              layout='intrinsic'
              src='/images/podcast_icon.png'
              alt='podcast media link'
            />
          </Link>
        </li>
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
