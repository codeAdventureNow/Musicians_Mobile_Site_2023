import styles from './about.module.css';
import ScheduleButton from '../components/schedule-button/schedule-button';
import Image from 'next/image';
import Header from '../components/header/header';

const About = () => {
  return (
    <div className='homepage'>
      <section className='section'>
        <div className='container'>
          <Header title='About' highlight=' Us' />
          <div className={styles.flex}>
            <div className={styles.content}>
              <p className={styles.paragraph}>
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
              <p className={styles.signature}>
                <span>Nate Mueller</span> Founder
              </p>
              <ScheduleButton />
            </div>
            <div className={styles.intro_image_container}>
              <Image
                className={`${styles.image} ${styles.margin_top}`}
                src='/images/Nate_Pic.jpg'
                alt='Nate Mueller'
                width={200}
                height={200}
                layout='intrinsic'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <Header title='Musicians' highlight=' Mobile' />

          <div className={styles.flex_reverse}>
            <div className={styles.content}>
              <p className={styles.paragraph}>
                Musician’s Mobile provides professional music lessons in the
                comfort of your home. Our music and voice instructors teach a
                variety of instruments in many different styles.{' '}
                <span>
                  {' '}
                  We pride ourselves on teaching students of many ages how to
                  play their favorite songs while giving them the essential
                  skills necessary to become a well-rounded musician.
                </span>
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
                className={`${styles.image} ${styles.margin_top}`}
                src='/images/Brandon_InHome_Piano.png'
                alt='Brandon teaching'
                width={255}
                height={225}
                layout='intrinsic'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <Header title='Student' highlight=' Success' />

          <div className={styles.column}>
            <div className={styles.intro_image_container}>
              <Image
                className={styles.image}
                src='/images/Arch_Piano.jpg'
                alt='student performing'
                width={200}
                height={225}
                layout='intrinsic'
              />
            </div>

            <div className={`${styles.content} ${styles.margin_top}`}>
              <p className={`${styles.paragraph} ${styles.italic}`}>
                “I must thank you for the opportunity to perform on Saturday.{' '}
                <span className={styles.bold}>
                  It felt nice to see smiles on the wonderful audience’s faces.
                  Archis and Ronan worked hard and loved every minute.
                </span>{' '}
                Please do let us know of future opportunities like this. I would
                love for them to participate. Archis is really loving the
                singing part of it and Ronan being so little is enjoying sitting
                at the piano for hours and practicing. Thanks again! You have a
                great team. We absolutely love Liana and Jared is really great
                .”
              </p>
              <p className={styles.signature}>
                <span>Guarangi C. </span> Los Gatos, CA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
