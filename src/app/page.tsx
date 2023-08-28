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
          <p className={HomePageStyle.pre_heading}>
            South Bay&apos;s Leading Service For
          </p>
          <p className={HomePageStyle.pre_heading}>Home Music Lessons!</p>
          <h1 className={HomePageStyle.hero_heading}>
            Quality{' '}
            <span className={HomePageStyle.hero_headin_highlight}>
              Music Teachers
            </span>{' '}
          </h1>
          <h1 className={HomePageStyle.hero_heading}>In-Home</h1>
          <h3 className={HomePageStyle.hero_subheading}>
            Happily helping hundreds of South Bay Area families<br></br> with
            music lessons since 2009.
          </h3>

          <Image
            className={HomePageStyle.hero_image}
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
