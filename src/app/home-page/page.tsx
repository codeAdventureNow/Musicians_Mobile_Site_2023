// 'use client';
import styles from './home-page.module.css';

import Image from 'next/image';
import Link from 'next/link';
import YouTubePlayer from '../components/youtube-player/youtube-player';
import GetYelpReviews from '../components/yelp-api/yelp-api';
import navstyles from '../components/nav/nav.module.css';
import { CheckIcon } from '@heroicons/react/solid';
import ScheduleButton from '../components/schedule-button/schedule-button';
import homeGuitarShy from '../../../public/images/HomeShy.jpg';
import drumsGuitarKeysFamily from '../../../public/images/drums_guitar_piano_inhome_edit.jpg';
import inHomePianoLesson from '../../../public/images/inhomepiano.jpg';
import twoGuitarsVocalsOnStage from '../../../public/images/vocal_guitar_rock_edit.jpg';
import Header from '../components/header/header';

export default function HomePage() {
  //youtube video id
  const promoVideo = 'ZZgqnipO-No';

  return (
    <div className='homepage'>
      {/*  Hero   */}
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
            Happily helping hundreds of South Bay Area families<br></br> with
            music lessons since 2009.
          </h3>

          <Image
            className={styles.hero_image}
            src={homeGuitarShy}
            alt='home music lesson'
            width={500}
            height={500}
            layout='intrinsic'
          />

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

      {/* Video Section */}
      <section className={`${styles.section} ${styles.video_section}`}>
        <div className={styles.container}>
          <Header title='Professional' highlight=' Music Lessons'>
            <br />
            In-Home
          </Header>

          <div className={styles.video_section_flex}>
            <div className={styles.you_tube_container}>
              <YouTubePlayer videoId={promoVideo} />
            </div>

            <div className={styles.section_text}>
              <p
                className={`${styles.video_section_paragraph} ${styles.video_section_paragraph_one}`}
              >
                Musicians Mobile brings quality, background-checked music
                teachers straight to your home.
              </p>
              <br />
              <br />
              <p
                className={`${styles.video_section_paragraph} ${styles.video_section_paragraph_two}`}
              >
                Save the drive on highway 85 so your family can safely spend
                more time on what matters most.
              </p>
              <div className={navstyles.nav_cta}>
                <ScheduleButton />
                <br />

                <a className={navstyles.phone} href='tel:408-960-1100'>
                  <Image
                    width={20}
                    height={100}
                    layout='intrinsic'
                    src='/images/phone_icon.png'
                    alt='phone_icon'
                    className={styles.phone_icon}
                  />
                  <p>(408) 960-1100</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Progress */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Header title='Three Pillars To' highlight=' Progress' />

          <div className={styles.pillar_flex}>
            <div className={styles.pillar_column}>
              <h2 className={styles.pillar_heading}>
                1. Save
                <span className={styles.hero_heading_highlight}> Time</span>
              </h2>
              <Image
                className={styles.pillar_image}
                src={drumsGuitarKeysFamily}
                alt='students learning drums, guitar and keyboards from teacher'
                width={300}
                height={300}
                layout='intrinsic'
              />
              <h3 className={styles.pillar_subheading}>
                Save 4-8 hours a month in traffic and waiting for lessons.
              </h3>
              <ul>
                <li className={styles.pillar_section_bullet_points}>
                  <CheckIcon className={styles.check_mark} />
                  Eliminate the frustration, inefficiency, fuel expense, and
                  road risks of driving to and from lessons
                </li>
                <li className={styles.pillar_section_bullet_points}>
                  <CheckIcon className={styles.check_mark} />
                  Spend time doing what matters most to you
                </li>
              </ul>
            </div>
            <div className={styles.pillar_column}>
              <h2 className={styles.pillar_heading}>
                2. Quality
                <span className={styles.hero_heading_highlight}> Teachers</span>
              </h2>
              <Image
                className={styles.pillar_image}
                src={inHomePianoLesson}
                alt='student learning drums from teacher'
                width={300}
                height={300}
                layout='intrinsic'
              />
              <h3 className={styles.pillar_subheading}>
                Enjoy a friendly, focused approach from patient music teachers
              </h3>
              <ul>
                <li className={styles.pillar_section_bullet_points}>
                  <CheckIcon className={styles.check_mark} />
                  Learn the songs that excite you and keep you engaged in music
                  lessons
                </li>
                <li className={styles.pillar_section_bullet_points}>
                  <CheckIcon className={styles.check_mark} />
                  Teachers pass background checks and tested for musical
                  proficiency
                </li>
              </ul>
            </div>
            <div
              className={`${styles.pillar_column} ${styles.pillar_column_last}`}
            >
              <h2 className={styles.pillar_heading}>
                3. Perform{' '}
                <span className={styles.hero_heading_highlight}>
                  {' '}
                  Confidently
                </span>
              </h2>
              <Image
                className={styles.pillar_image}
                src={twoGuitarsVocalsOnStage}
                alt='student learning drums from teacher'
                width={300}
                height={300}
                layout='intrinsic'
              />
              <h3 className={styles.pillar_subheading}>
                We take the lessons to the home, and the students to the stage!
              </h3>
              <ul>
                <li className={styles.pillar_section_bullet_points}>
                  <CheckIcon className={styles.check_mark} />
                  Encouraging recitals designed for students to gain stage
                  confidence
                </li>
                <li className={styles.pillar_section_bullet_points}>
                  <CheckIcon className={styles.check_mark} />
                  Learn to play well with others through team building rock band
                  shows and workshops
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*  Reviews    */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Header title='Check Out Our' highlight=' Reviews' />
          <GetYelpReviews />
        </div>
      </section>
      <section className={`${styles.section} ${styles.cta_final}`}>
        <div className={styles.container}>
          <div className={styles.pillar_column}>
            <Header title='Try Us' highlight=' Free!' />

            <p className={styles.free_lesson_paragraph}>
              Try a free no obligation 30-minute lesson in the comfort of your
              home. Choose from piano, guitar, voice, violin, and drums.
            </p>
            <div className={navstyles.nav_cta}>
              <ScheduleButton />
              <br />

              <a className={navstyles.phone} href='tel:408-960-1100'>
                {' '}
                <Image
                  width={20}
                  height={100}
                  layout='intrinsic'
                  src='/images/phone_icon.png'
                  alt='phone_icon'
                  className={styles.phone_icon}
                />
                <p>(408) 960-1100</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
