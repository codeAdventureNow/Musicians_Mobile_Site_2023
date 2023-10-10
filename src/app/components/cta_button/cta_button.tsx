import Link from 'next/link';
import styles from './cta_button.module.css';

export default function CTA_Button() {
  return (
    <Link className={styles.cta_button} rel='noreferrer' href='#'>
      Schedule A Free Lesson!
    </Link>
  );
}
