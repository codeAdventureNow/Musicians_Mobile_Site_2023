import Link from 'next/link';
import Image from 'next/image';

import Nav from '../components/nav/nav';
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <Nav />
      <div>
        <h2 className={styles.paragraph}>Welcome to the about page</h2>
      </div>

      {/* <div>
        <Link href='/'>
          <Image
            width={100}
            height={100}
            layout='intrinsic'
            src='/images/Logo.jpg'
            alt='musicians mobile logo'
          />
        </Link>
      </div> */}
    </div>
  );
}
