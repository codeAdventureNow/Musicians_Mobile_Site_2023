'use client';
import styles from './homepage.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.hero_pre_heading}>
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

          <ul className={styles.hero_lesson_links_list}>
            <li>
              <Link className={styles.lesson_link} href='#'>
                Piano Lessons
              </Link>
            </li>
            <li>
              <Link className={styles.lesson_link} href='#'>
                Guitar Lessons
              </Link>
            </li>
            <li>
              <Link className={styles.lesson_link} href='#'>
                Voice Lessons
              </Link>
            </li>
            <li>
              <Link className={styles.lesson_link} href='#'>
                Drum Lessons
              </Link>
            </li>
            <li>
              <Link className={styles.lesson_link} href='#'>
                Violin Lessons
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.section_text}>
            <h2 className={styles.section_heading}>
              Professional{' '}
              <span className={styles.hero_heading_highlight}>
                Music Teachers
              </span>{' '}
              <br />
              In-Home
            </h2>
            <p className={styles.section_paragraph}>
              Musicians Mobile brings quality, background-checked music teachers
              straight to your home.{' '}
            </p>
            <br />
            <p className={styles.section_paragraph}>
              Save the drive on the 85 so your family can safely spend more time
              on what matters most.{' '}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}