import HomePageStyle from './page.module.css';
import HomePage from './components/home';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel='stylesheet' href={HomePageStyle.styles} />
      </Head>
      <section className={HomePageStyle.hero}>
        <div className={HomePageStyle.container}>
          <p>South Bay&apos;s Leading Service For Home Music Lessons!</p>
          <h1 className={HomePageStyle.heading}>
            Quality Music Teachers In-Home
          </h1>
          <h3>
            Happily helping hundreds of South Bay Area families with music
            lessons since 2009.
          </h3>
          <Image
            src='/images/HomeShy.jpg'
            alt='home music lesson'
            width={500}
            height={500}
            layout='intrinsic'
          ></Image>
          <ul className={HomePageStyle.lesson_links_list}>
            <li>
              <a className={HomePageStyle.lesson_link} href='#'>
                Piano Lessons
              </a>
            </li>
            <li>
              <a className={HomePageStyle.lesson_link} href='#'>
                Guitar Lessons
              </a>
            </li>
            <li>
              <a className={HomePageStyle.lesson_link} href='#'>
                Voice Lessons
              </a>
            </li>
            <li>
              <a className={HomePageStyle.lesson_link} href='#'>
                Drum Lessons
              </a>
            </li>
            <li>
              <a className={HomePageStyle.lesson_link} href='#'>
                Violin Lessons
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
