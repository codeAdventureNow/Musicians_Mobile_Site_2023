import HomePageStyle from './page.module.css';
import Hero from './components/hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel='stylesheet' href={HomePageStyle.styles} />
      </Head>
      <Hero />
    </div>
  );
}
