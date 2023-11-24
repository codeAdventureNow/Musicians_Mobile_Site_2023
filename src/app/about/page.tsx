import styles from './about.module.css';
import ScheduleButton from '../components/schedule-button/schedule-button';
import Image from 'next/image';

const About = () => {
  return (
    <div className='homepage'>
      <section className='section'>
        <div className='container'>
          <h2 className='section_heading'>
            About <span className='hero_heading_highlight'>Us</span>{' '}
          </h2>
          <div className={styles.flex}>
            <div className={styles.intro_content}>
              <p className={styles.intro_paragraph}>
                “We aim to save your family time for what matters most by
                bringing high-quality music instructors to your home. We
                specialize in tailoring our lessons to your child’s interests to
                help them connect to the instrument and establish a life-long
                love of music."
              </p>
              <p>
                "On this path, we help to developing musical proficiency through
                a repertoire of songs, while honing their collaborative skills
                through regular live performance opportunities. We are honored
                to help every one of our students gain confidence within
                themselves through the joy of music.”
              </p>
              <p className={styles.signature}>Nate Mueller- Founder</p>
              <ScheduleButton />
            </div>
            <div className={styles.intro_image_container}>
              <Image
                className={styles.image}
                src='/images/Nate_Pic.jpg'
                alt='Nate Mueller'
                width={200}
                height={200}
                layout='intrinsic'
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <h2 className='section_heading'>
            Musicians<span className='hero_heading_highlight'> Mobile</span>{' '}
          </h2>
          <div className={styles.flex_reverse}>
            <div className={styles.intro_content}>
              <p className={styles.intro_paragraph}>
                Musician’s Mobile provides professional music lessons in the
                comfort of your home. Our music and voice instructors teach a
                variety of instruments in many different styles. We pride
                ourselves on teaching students of many ages how to play their
                favorite songs while giving them the essential skills necessary
                to become a well-rounded musician.
              </p>
              <p>
                Musicians Mobile was founded by Nate Mueller in 2009 with the
                goal of providing enjoyable home music lessons. The company
                offers a collection of music instructors who share a similar
                passion for teaching. We work together to create a positive
                musical environment that helps students grow through lessons,
                recitals and musical workshops.
              </p>
            </div>
            <div className={styles.intro_image_container}>
              <Image
                className={styles.image}
                src='/images/Brandon_InHome_Piano.png'
                alt='Nate Mueller'
                width={255}
                height={225}
                layout='intrinsic'
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
