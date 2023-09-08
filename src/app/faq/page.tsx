import Nav from '../components/nav/nav';
import styles from './faq.module.css';

export default function FAQ() {
  return (
    <div>
      <Nav />
      <div>
        <h2 className={styles.paragraph}>Welcome to the faq page</h2>
      </div>
    </div>
  );
}
