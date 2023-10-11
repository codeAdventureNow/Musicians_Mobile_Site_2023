import Link from 'next/link';
import styles from './scheduleButton.module.css';

export default function scheduleButton() {
  return (
    <Link className={styles.cta_button} rel='noreferrer' href='#'>
      Schedule A Free Lesson!
    </Link>
  );
}
