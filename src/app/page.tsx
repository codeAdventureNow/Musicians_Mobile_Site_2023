// import HomePageStyle from './page.module.css';
import HomePage from './homepage/homepage';
import About from './about/aboutpage';
import Nav from './components/nav/nav';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Nav />
      <Link href='/home'>
        <HomePage />
      </Link>
      <Link href='/about'>
        <About />
      </Link>
    </div>
  );
}
