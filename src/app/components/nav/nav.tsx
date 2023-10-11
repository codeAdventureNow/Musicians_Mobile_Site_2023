'use client';

import styles from './nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ScheduleButton from '../scheduleButton/scheduleButton';

export default function Nav() {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleBurgerMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
    setIsActive(!isActive);
  };

  const navLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Teachers',
      href: '/teachers',
    },
    {
      name: 'FAQ',
      href: '/faq',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <header className={styles.header}>
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
      <ul
        className={
          isActive ? `${styles.navbar}` : `${styles.navbar} ${styles.open}`
        }
      >
        {navLinks.map((link) => {
          const isActiveLink = pathname === link.href;

          return (
            <Link
              className={
                isActiveLink ? `${styles.link_active}` : `${styles.link}`
              }
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>

      <div className={styles.cta_burgerMenu}>
        <div className={styles.nav_cta}>
          <ScheduleButton />
          <br />

          <a className={styles.phone} href='tel:408-960-1100'>
            {' '}
            <Image
              width={20}
              height={100}
              layout='intrinsic'
              src='/images/phone_icon.png'
              alt='phone_icon'
              className={styles.phone_icon}
            />
            <p>(408) 960-1100</p>
          </a>
        </div>
        <div
          onClick={toggleBurgerMenu}
          className={`nav-icon1 ${isOpen ? `${styles.open}` : ''}`}
          id={styles.nav_icon1}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
