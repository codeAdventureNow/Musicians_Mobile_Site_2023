import Link from 'next/link';
import styles from './schedule-button.module.css';

export default function ScheduleButton() {
  return (
    <Link className={styles.cta_button} rel='noreferrer' href='/contact'>
      Schedule A Free Lesson!
    </Link>
  );
}
