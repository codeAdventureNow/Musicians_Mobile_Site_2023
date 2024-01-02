import ScheduleButton from '../components/schedule-button/schedule-button';
import Image from 'next/image';
import Header from '../components/header/header';
import styles from '../piano/piano.module.css';

export default function DrumLessons() {
  return (
    <div className='homepage'>
      <section className='section'>
        <div className={styles.container}>
          <Header title='Drum' highlight=' Lessons' />
          <Image
            className={styles.image}
            src='/images/HappyDrummer.png'
            alt='Nate Mueller'
            width={350}
            height={200}
            layout='intrinsic'
          />
          <div className={styles.padding_top}>
            <ScheduleButton />
          </div>

          <p className={styles.subheading}>
            Available in Los Gatos, Saratoga, San Jose, Cupertino, Campbell,
            Sunnyvale, Los Altos and Mountain View
          </p>
          <p className={styles.paragraph}>
            Musicians Mobile offers quality, in-home
            <span className={styles.bold}> drum lessons</span>. Save a trip and
            time while we provide you enjoyable drum lessons with a
            background-checked teaching professional in your own home.
          </p>
          <p className={styles.paragraph}>
            We believe that learning to play the drums should be fun. Our
            instructors create a caring connection with our students and bring
            out their best by adapting their teaching methods to individual
            students’ needs. We tailor our drum lessons to your unique musical
            interests so that you are engaged and invested in the learning
            process. You co-create your musical journey with your teacher who
            serves as your motivational guide and coach.
          </p>
          <p className={styles.paragraph}>
            Our <span className={styles.bold}> drum teachers</span> are trained
            in rock, pop, electronic dance music, blues, and jazz. In addition
            to learning your favorite pieces, you will gain knowledge and skills
            in various styles, playing technique, coordination, reading staff
            notation, syncopation, improvisation, and stage presence.
          </p>
          <p className={`${styles.paragraph} ${styles.padding_bottom}`}>
            Our <span className={styles.bold}> drum lessons</span> are the
            launch pad for you to become a confident performer. We host exciting
            rock concerts, recitals, and workshops in which you apply your
            expanding talents in the thrill of live performance. Our shows are
            staged in a warm, supportive atmosphere to encourage the building of
            poise and confidence.
          </p>
        </div>
      </section>
    </div>
  );
}
