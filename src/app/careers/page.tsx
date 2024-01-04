import Image from 'next/image';
import Header from '../components/header/header';
import styles from '../piano/piano.module.css';
import style from './careers.module.css';
import Link from 'next/link';

export default function Careers() {
  const email = 'natem@musiciansmobile.com';
  return (
    <div className='homepage'>
      <section className='section'>
        <div className={styles.container}>
          <Header title='Music' highlight=' Careers' />
          <Image
            className={styles.image}
            src='/images/drums_guitar_inhome.jpg'
            alt='Nate Mueller'
            width={350}
            height={200}
            layout='intrinsic'
          />

          <p className={styles.subheading}>Music Teaching Job Openings:</p>
          <p className={styles.subheading}>
            Currently seeking qualified and enthusiastic teachers of guitar,
            piano, drums, and voice.
          </p>
          <p className={styles.paragraph}>
            Our mission is to use music as a positive tool to sculpt the next
            generation of musicians. By impacting young musicians’ lives through
            home-music lessons and exciting performance opportunities you will
            help shape young musicians creativity, confidence and connection to
            the arts. Musicians Mobile will help support you in this rewarding
            journey and career path.
          </p>
          <p className={styles.paragraph}>
            Our in-home music instructors are responsible for teaching and
            developing the talents of primarily young students from ages 5-18.
          </p>

          <p className={styles.subheading}>Highlights include:</p>
          <ul className={style.list}>
            <li className={style.list_Item}>
              Leading students with your own teaching style
            </li>
            <li className={style.list_Item}>
              Collaborating and connecting at exciting performance events
            </li>
            <li className={style.list_Item}> Designing your own schedule</li>
            <li>
              Being a part of a friendly and talented team of pro musicians
            </li>
            <li className={style.list_Item}>
              Traveling to students homes (mileage paid)
            </li>
            <li className={style.list_Item}>
              Helping our team grow with your valued ideas
            </li>
            <li className={style.list_Item}>
              Competitive pay that covers travel time, lesson preparation, and
              home-music lessons
            </li>

            <li className={style.list_Item}>
              Employee benefits and career path opportunities
            </li>
          </ul>

          <p className={styles.subheading}>Requirements:</p>
          <p>
            Our teachers travel to the students’ homes typically between the
            hours of 3-9pm on weekdays.
          </p>

          <ul className={style.list}>
            <p>Ideal Candidates Are:</p>
            <li className={style.list_Item}>
              Fantastic at connecting with youngsters
            </li>
            <li className={style.list_Item}>
              Adept at learning current top 40 music
            </li>
            <li className={style.list_Item}>
              Display college-level musical proficiency
            </li>
            <li>Customer service focused and display a positive attitude</li>
            <li className={style.list_Item}>Highly organized</li>
            <li className={style.list_Item}>Excellent communicators</li>
            <li className={style.list_Item}>Skilled and safe drivers</li>
          </ul>

          <p className={`${styles.padding_bottom} ${styles.padding_top}`}>
            Send your resume to{' '}
            <Link href={`mailto:${email}`}>natem@musiciansmobile.com</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
