import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer_nav}>
        <li>
          <Link className={styles.nav_links} href='/'>
            Careers
          </Link>
          <Link className={styles.nav_links} href='/'>
            Blog
          </Link>
        </li>
      </ul>
      <ul className={styles.footer_navtwo}>
        <li>
          <Link className={styles.nav_links} href='/'>
            Terms & Conditions
          </Link>
          <Link className={styles.nav_links} href='/'>
            Privacy Policy
          </Link>
        </li>
      </ul>
      <div className={styles.logo}>
        <Link href='/'>
          <Image
            width={100}
            height={100}
            layout='intrinsic'
            src='/images/Logo.jpg'
            alt='musicians mobile logo'
          />
        </Link>
      </div>
    </footer>
  );
}
