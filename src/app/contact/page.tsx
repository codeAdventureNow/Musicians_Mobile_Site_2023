import styles from './contact.module.css';

import Image from 'next/image';

import navstyles from '../components/nav/nav.module.css';

export default function Contact() {
  return (
    <div className={styles.homepage}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.hero_heading}>Contact Us</h1>
          <div className={styles.pillar_flex}>
            <div className={styles.pillar_column}>
              <h2 className={styles.pillar_heading}>Option 1</h2>
              <p>
                Schedule a 10-minute phone consultation. Talk to one of our team
                members so we can learn more about your music interests and
                answer any questions.
              </p>
            </div>
            <div className={styles.pillar_column}>
              <h2 className={styles.pillar_heading}>Option 2 </h2>
              <p>Call us directly</p>
              <div className={navstyles.nav_cta}>
                <br />
                <a className={navstyles.phone} href='tel:408-960-1100'>
                  {' '}
                  <Image
                    width={20}
                    height={100}
                    layout='intrinsic'
                    src='/images/phone_icon.png'
                    alt='phone_icon'
                    className={styles.phone_icon}
                  />
                  <p>(408) 960-1100</p>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.pillar_flex}>
            <div className={styles.pillar_column}>
              <h2 className={styles.pillar_heading}>Option 3 </h2>
              <p>Fill out our contact form</p>
            </div>
            <div className={styles.pillar_column}>
              <h4>Musicians Mobile</h4>
              <div className={navstyles.nav_cta}>
                <br />
                <a className={navstyles.phone} href='tel:408-960-1100'>
                  {' '}
                  <Image
                    width={20}
                    height={100}
                    layout='intrinsic'
                    src='/images/phone_icon.png'
                    alt='phone_icon'
                    className={styles.phone_icon}
                  />
                  <p>(408) 960-1100</p>
                </a>
              </div>
              <p>carl@musiciansmobile.com</p>
              <p>1276 Lincoln Ave, suite 109</p>
              <p>San Jose, CA 95125</p>
              <p>Office Hours: M-F 9am-6pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
