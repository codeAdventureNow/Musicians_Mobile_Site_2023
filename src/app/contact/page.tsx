'use client';
import styles from './contact.module.css';
import Image from 'next/image';
import Link from 'next/link';
import navstyles from '../components/nav/nav.module.css';
import dynamic from 'next/dynamic';
import Header from '../components/header/header';

const DynamicContactForm = dynamic(
  () => import('../components/form-input/form-input'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Contact() {
  return (
    <div className={styles.homepage}>
      <section className={styles.section}>
        <div className={styles.container}>
          <Header title='Contact' highlight=' Us' />

          <div className={styles.pillar_flex}>
            <div className={styles.pillar_column}>
              <h2 className={styles.pillar_heading}>Option 1</h2>
              <p className={styles.pillar_paragraph}>
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
              <p className={styles.required}>(*Required)</p>
              <DynamicContactForm />
            </div>
            <div className={styles.pillar_column}>
              <div className={styles.logo}>
                <Link href='/'>
                  <Image
                    width={100}
                    height={100}
                    layout='intrinsic'
                    src='/images/Logo.jpg'
                    alt='musicians mobile logo'
                  />
                </Link>
              </div>
              <p>Office Hours: M-F 9am-6pm</p>
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
              <div className={styles.contact_info}>
                <p>carl@musiciansmobile.com</p>
                <p>1276 Lincoln Ave, suite 109</p>
                <p>San Jose, CA 95125</p>
              </div>

              <div className={styles.map}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.5629107149553!2d-121.90112832343421!3d37.30549173905257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e346eb98cff69%3A0x2e9270c56585f820!2sMusicians%20Mobile!5e0!3m2!1sen!2sus!4v1697230138264!5m2!1sen!2sus'
                  width='300'
                  height='225'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
