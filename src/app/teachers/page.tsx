import styles from './teachers.module.css';

export default function Teachers() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_heading}>Music Teachers and Staff</h2>
          <p>
            We believe that when you enjoy your instrument, you stick with it.
            Our patient, encouraging approach to learning blended with a
            friendly yet firm teaching style allows you to learn the songs you
            love. We strive to create an environment of self-motivated practice.
            <br />
            <br />
            We emphasize learning numerous songs/pieces and showcasing them with
            peers in our exciting performance opportunities. Our teachers are
            employees who pass proficiency tests, multiple interviews, and a
            national criminal background check prior to being hired.
          </p>
        </div>
      </section>
    </div>
  );
}
