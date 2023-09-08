import Nav from '../components/nav/nav';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div>
      <Nav />
      <div>
        <h2 className={styles.paragraph}>Welcome to the contact page</h2>
      </div>
    </div>
  );
}
