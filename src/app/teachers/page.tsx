import styles from './teachers.module.css';
import { TeacherCard } from '../components/teacher-card/teacher-card';
import { staff, teachers } from './teacher-data';
import Header from '../components/header/header';

export default function Teachers() {
  return (
    <div className={styles.page}>
      <section className={styles.heading_section}>
        <div className={styles.container}>
          <Header title='Music' highlight=' Teachers'>
            {' '}
            + Staff
          </Header>
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
          <Header title='Staff' />
          <div className={styles.card_container}>
            {staff.map((person) => {
              const { name, image, role, alt, bio } = person;
              return (
                <TeacherCard
                  name={name}
                  image={image}
                  role={role}
                  alt={alt}
                  bio={bio}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <Header title='Music' highlight=' Teachers' />
          <div className={styles.card_container}>
            {teachers.map((teacher) => {
              const { name, image, role, alt, bio } = teacher;
              return (
                <TeacherCard
                  name={name}
                  image={image}
                  role={role}
                  alt={alt}
                  bio={bio}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
