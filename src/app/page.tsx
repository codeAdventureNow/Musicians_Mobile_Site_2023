// import HomePageStyle from './page.module.css';
import HomePage from './homepage/homepage';
import About from './about/page';
import Teachers from './teachers/page';
import FAQ from './faq/page';
import Contact from './contact/page';
import Nav from './components/nav/nav';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Nav />
      <HomePage />

      <Link href='/about'>
        <About />
      </Link>
      <Link href='/teachers'>
        <Teachers />
      </Link>
      <Link href='/faq'>
        <FAQ />
      </Link>
      <Link href='/contact'>
        <Contact />
      </Link>
    </div>
  );
}
