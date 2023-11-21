import styles from './teachers.module.css';
import { TeacherCard } from '../components/teacher-component/teacher-card';

interface Teacher {
  name: string;
  image: string;
  role: string;
  alt: string;
  bio: string;
}

const teacher: Teacher = {
  name: 'Nate Mueller',
  image: '/images/Nate_Pic.jpg',
  role: 'Front End Engineer',
  alt: 'Nate in a blue shirt',
  bio: `Nate Mueller is the president and founder of Musicians Mobile. He
  has been teaching music at local schools throughout the Bay Area
  since 2002. In 2003, Nate chose to take his teaching directly to
  students by providing lessons in their own homes, providing an added
  convenience for both the parents and students. Outside of teaching
  music, Nate is a successful music producer. He has provided
  entertainment for brands such as the Golden State Warriors and the
  US Olympic Team. Additionally, his compositions have been licensed
  to ABC,VH1, MTV, and featured on the hit show Modern Family.`,
};

export default function Teachers() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_heading}>
            Music{' '}
            <span className={styles.hero_heading_highlight}>Teachers</span> +
            Staff
          </h2>
          <div className={styles.intro_paragraph_flex}>
            <p className={styles.intro_paragraph}>
              We believe that when you enjoy your instrument, you stick with it.
              Our patient, encouraging approach to learning blended with a
              friendly yet firm teaching style allows you to learn the songs you
              love. We strive to create an environment of self-motivated
              practice.
            </p>
            <p className={styles.intro_paragraph}>
              We emphasize learning numerous musical pieces and showcasing them
              with peers in our exciting performance opportunities. Our teachers
              are employees who pass proficiency tests, multiple interviews, and
              a background check prior to being hired.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_heading}>Staff</h2>
          <div className={styles.card_container}>
            <TeacherCard
              name={teacher.name}
              image={teacher.image}
              role={teacher.role}
              alt={teacher.alt}
              bio={teacher.bio}
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_heading}>Music Teachers</h2>
        </div>
      </section>
    </div>
  );
}
