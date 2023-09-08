import Nav from '../components/nav/nav';
import styles from './teachers.module.css';

export default function Teachers() {
  return (
    <div>
      <Nav />
      <div>
        <h2 className={styles.paragraph}>Welcome to the teachers page</h2>
      </div>
    </div>
  );
}
