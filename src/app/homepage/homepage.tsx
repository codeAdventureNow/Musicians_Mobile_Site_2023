import HomePageStyle from '../page.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <section className={HomePageStyle.hero}>
        <div className={HomePageStyle.container}>
          <div className={HomePageStyle.pre_heading}>
            <p>
              South Bay&apos;s Leading Service For
              <br />
              Home Music Lessons!
            </p>
          </div>

          <h1 className={HomePageStyle.hero_heading}>
            Quality{' '}
            <span className={HomePageStyle.hero_heading_highlight}>
              Music Teachers
            </span>{' '}
            <br />
            In-Home
          </h1>

          <h3 className={HomePageStyle.hero_subheading}>
            <i>
              Happily helping hundreds of South Bay Area families<br></br> with
              music lessons since 2009.
            </i>
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
    </>
  );
}