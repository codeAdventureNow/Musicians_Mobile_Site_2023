// import HomePageStyle from './page.module.css';
import HomePage from './homepage/page';
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
    </div>
  );
}
