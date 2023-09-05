'use client';

import styles from './nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };

  const toggleBurgerMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          width={100}
          height={100}
          layout='intrinsic'
          src='/images/Logo.jpg'
          alt='musicians mobile logo'
        />
      </div>
      <ul
        className={
          isActive ? `${styles.navbar}` : `${styles.navbar} ${styles.open}`
        }
      >
        <li>
          <Link
            className={activeLink === 'home' ? `${styles.active}` : ''}
            onClick={() => handleLinkClick('home')}
            href='/home'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleLinkClick('about')}
            href='/about'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === 'music-teachers' ? 'active' : ''}
            onClick={() => handleLinkClick('music-teachers')}
            href='#Music Teachers'
          >
            Teachers
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === 'faq' ? 'active' : ''}
            onClick={() => handleLinkClick('faq')}
            href='#FAQ'
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleLinkClick('contact')}
            href='#Contact'
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className={styles.cta_burgerMenu}>
        <div className={styles.nav_cta}>
          <Link className={styles.cta_button} rel='noreferrer' href='#'>
            Schedule A Free Lesson!
          </Link>
          <br />
          <a className={styles.phone} href='tel:408-960-1100'>
            408-960-1100
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
