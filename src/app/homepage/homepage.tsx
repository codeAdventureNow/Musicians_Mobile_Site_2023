import styles from './homepage.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.pre_heading}>
            <p>
              South Bay&apos;s Leading Service For
              <br />
              Home Music Lessons!
            </p>
          </div>

          <h1 className={styles.hero_heading}>
            Quality{' '}
            <span className={styles.hero_heading_highlight}>
              Music Teachers
            </span>{' '}
            <br />
            In-Home
          </h1>

          <h3 className={styles.hero_subheading}>
            <i>
              Happily helping hundreds of South Bay Area families<br></br> with
              music lessons since 2009.
            </i>
          </h3>

          <Image
            className={styles.hero_image}
            src='/images/HomeShy.jpg'
            alt='home music lesson'
            width={500}
            height={500}
            layout='intrinsic'
          ></Image>

          <ul className={styles.lesson_links_list}>
            <li>
              <a className={styles.lesson_link} href='#'>
                Piano Lessons
              </a>
            </li>
            <li>
              <a className={styles.lesson_link} href='#'>
                Guitar Lessons
              </a>
            </li>
            <li>
              <a className={styles.lesson_link} href='#'>
                Voice Lessons
              </a>
            </li>
            <li>
              <a className={styles.lesson_link} href='#'>
                Drum Lessons
              </a>
            </li>
            <li>
              <a className={styles.lesson_link} href='#'>
                Violin Lessons
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_heading}>
            Pro{' '}
            <span className={styles.hero_heading_highlight}>
              Music Teachers
            </span>{' '}
            <br />
            In-Home
          </h2>
        </div>
      </section>
    </>
  );
}
