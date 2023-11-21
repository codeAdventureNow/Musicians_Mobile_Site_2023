import styles from './teachers.module.css';
import { TeacherCard } from '../components/teacher-component/teacher-card';

export default function Teachers() {
  return (
    <div>
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
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_heading}>Music Teachers</h2>
          <TeacherCard />
        </div>
      </section>
    </div>
  );
}
