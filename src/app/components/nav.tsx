'use client';

import HomePageStyle from '../page.module.css';
import Image from 'next/image';
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
    <header className={HomePageStyle.header}>
      <div className={HomePageStyle.logo}>
        <Image
          width={100}
          height={100}
          layout='intrinsic'
          src='/images/Logo.jpg'
          alt='musicians mobile logo'
        />
      </div>
      <ul className={isActive ? 'navbar' : 'navbar open'}>
        <li>
          <a
            className={activeLink === 'home' ? 'active' : ''}
            onClick={() => handleLinkClick('home')}
            href='#Home'
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleLinkClick('about')}
            href='#About'
          >
            About
          </a>
        </li>
        <li>
          <a
            className={activeLink === 'music-teachers' ? 'active' : ''}
            onClick={() => handleLinkClick('music-teachers')}
            href='#Music Teachers'
          >
            Music Teachers
          </a>
        </li>
        <li>
          <a
            className={activeLink === 'faq' ? 'active' : ''}
            onClick={() => handleLinkClick('faq')}
            href='#FAQ'
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleLinkClick('contact')}
            href='#Contact'
          >
            Contact
          </a>
        </li>
      </ul>
      <div className='nav_cta'>
        <a className='cta_button' rel='noreferrer' href='#'>
          Schedule A Free Lesson!
        </a>
        <br />
        <a href='tel:408-960-1100'>408-960-1100</a>
      </div>
      <div
        onClick={toggleBurgerMenu}
        className={`nav-icon1 ${isOpen ? 'open' : ''}`}
        id='nav-icon1'
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
