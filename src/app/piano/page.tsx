import ScheduleButton from '../components/schedule-button/schedule-button';
import Image from 'next/image';
import Header from '../components/header/header';
import styles from './piano.module.css';

export default function PianoLessons() {
  return (
    <div className='homepage'>
      <section className='section'>
        <div className={styles.container}>
          <Header title='Piano' highlight=' Lessons' />
          <Image
            className={styles.image}
            src='/images/BrandonInLesson.png'
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
            Musician Mobile provides quality music teachers for{' '}
            <span className={styles.bold}>in-home piano lessons</span>. Imagine
            playing your favorite songs on the piano with poise and confidence.
            We believe that by learning the pieces you enjoy, you will be
            inspired and engaged in your learning process. Musicians Mobile’s
            teachers are well-versed in a variety of styles, ranging from
            classical to contemporary. We provide the perfect opportunity for
            talented instructors looking for{' '}
            <span className={styles.bold}>piano teacher jobs near me</span> .
          </p>
          <p className={styles.paragraph}>
            Our piano lessons feature a comprehensive and balanced approach. In
            addition to developing your repertoire, you will also gain knowledge
            of proper technique and music theory, including staff notation,
            scales, and chords.
          </p>
          <p className={styles.paragraph}>
            Our vision is to inspire you to become a well-rounded musician who
            continues to enjoy music for a lifetime, whether it is on the
            concert stage or for your own personal enjoyment.
          </p>
          <p className={styles.paragraph}>
            Our <span className={styles.bold}>piano teachers </span>display a
            unique talent for connecting with a diversity of students. We pride
            ourselves on being able to creatively adapt our teaching to our
            students’ needs in order to bring out their best.
          </p>
          <p className={styles.paragraph}>
            We care about your progress and foster your development through
            well-balanced pedagogy and a positive learning environment. As your
            skills grow through engaging lessons with your teacher, the next
            step is to share the fruits of your labor. Our students love to
            participate in a wide range of performance opportunities including
            piano recitals, band workshops, and community shows. Our recitals
            feature a fun approach and supportive atmosphere in which students
            are encouraged to feel at ease on stage.
          </p>
          <p className={`${styles.paragraph} ${styles.padding_bottom} `}>
            We also actively hire amazing piano teachers looking for for{' '}
            <span className={styles.bold}>piano teacher jobs near me</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
