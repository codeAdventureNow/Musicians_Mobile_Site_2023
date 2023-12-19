import styles from './faq.module.css';
import Link from 'next/link';
import Header from '../components/header/header';

const FAQ = () => {
  return (
    <div className='homepage'>
      <section className='section'>
        <div className='container'>
          <Header title='Frequently Asked' highlight=' Questions' />

          <div className={styles.flex}>
            <div className={styles.question_container}>
              <p className={styles.question}>
                What areas you do you provide music lessons?
              </p>
              <p className={styles.answer}>
                Online lessons can be provided in the San Francisco Bay Area and
                nationally. Our primary teaching areas are for in-house music
                lessons are: San Jose (95129, 95124, 95125, 95118), Campbell,
                Los Gatos, Saratoga, Cupertino, Sunnyvale (94087), Mountain View
                (94040), Los Altos (94024). We are expanding to the Palo Alto,
                Menlo Park, Los Altos Hills and proximate areas for piano and
                guitar! Due to heavy traffic our teachers are focused in a tight
                radius.
              </p>
            </div>
            <div className={styles.question_container}>
              <p className={styles.question}>What are your rates?</p>
              <ul className={styles.rate_list}>
                <li>
                  Our base in-home lesson rates vary depending on the duration:
                </li>
                <li>60 minutes: $110-140</li>
                <li>45 minutes: $90-115</li>
                <li>30 minutes: $70-90</li>
                <li>
                  Prices may fluctuate based on the instructor and location.
                  Additional fees may apply for certain travel distances. For an
                  accurate quote, please{' '}
                  <Link className={styles.link} href='/contact'>
                    Contact
                  </Link>{' '}
                  us.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.question_container}>
              <p className={styles.question}>How do we get started?</p>
              <p className={styles.answer}>
                Click our{' '}
                <Link className={styles.link} href='/contact'>
                  Contact
                </Link>{' '}
                page and fill in the required information. We will then contact
                you to learn more about your needs and to set up a mutually
                agreeable time to schedule your free trial lesson
              </p>
            </div>
            <div className={styles.question_container}>
              <p className={styles.question}>Do you teacher beginners?</p>
              <p className={styles.answer}>
                Absolutely! Everyone has to start somewhere and many of our
                students have never had any previous musical training. Part of
                the excitement of doing what we do is shaping new musicians into
                lifelong learners who want to gain more skill and confidence in
                their art.
              </p>
            </div>
          </div>
          <div className={`${styles.flex} ${styles.howitworks}`}>
            <div className={styles.question_container}>
              <p className={styles.question}>How does this work?</p>

              <ol className={styles.contact_steps} type='1'>
                <li>
                  <span className={styles.margin_right}>1.</span>{' '}
                  <Link className={styles.link} href='/contact'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <span className={styles.margin_right}>2.</span>{' '}
                  <p className={styles.inline}>
                    Set up an initial phone consultation to learn about your
                    music interests and needs. We can assess if we are a good
                    fit for each other. E-mail consultations are available if
                    you prefer.
                  </p>
                </li>
                <li>
                  <span className={styles.margin_right}>3.</span> Schedule a
                  free trial lesson to gauge teacher/student fit, discover your
                  interests, and current playing abilities. We will make
                  suggestions on books and supplies to pick up. Parents and
                  students can ask questions about our services.
                </li>
                <li>
                  <span className={styles.margin_right}>4.</span> If you decide
                  to continue with ongoing lessons after your free trial lesson,
                  you will then schedule a standing weekly appointment at a
                  mutually agreeable time with your teacher (for example,
                  Mondays 4:30-5:15).{' '}
                </li>
                <li>
                  <span className={styles.margin_right}>5.</span> Opportunities
                  arise throughout the year to participate in recitals and
                  workshops. Online recitals are available for students outside
                  of our local SF Bay Area.
                </li>
                <li>
                  <span className={styles.margin_right}>6.</span> Lessons are
                  billed in advance two months at a time through an e-mail
                  invoice.{' '}
                </li>
              </ol>
              <p className={styles.answer}>
                For detailed school policies and billing questions read our{' '}
                <Link
                  className={styles.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  href='/images/Musicians_Mobile_Service_Agreement_Bi_Monthly_May_2021.pdf'
                >
                  lesson policies.
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.question_container}>
              <p className={styles.question}>How long are the lessons?</p>
              <p className={styles.answer}>
                We offer ½-hour, ¾-hour and 1-hour lessons. For a 5-10-year-old
                just getting started, a half hour is a good start. If the
                student is really showing interest and their attention span can
                handle it, you may want to consider a 3/4-hour or 1-hour lesson
                to see quicker progress. For 10 years old and above, we believe
                students can make more progress with a ¾-hour or 1-hour lesson,
                as long as they practice often and consistently. After our free
                trial lesson, we can make a more educated suggestion based on
                the student’s goals and needs.
              </p>
            </div>
            <div className={styles.question_container}>
              <p className={styles.question}>
                How do you determine which teacher will teach us?
              </p>
              <p className={styles.answer}>
                After you fill out the contact form, we will contact you to
                learn more about your musical instruction needs. We will then
                make our best suggestion as to which teacher might be the best
                fit. Our teachers are hired for their ability to connect and
                adapt to varied students’ needs, in addition to their proven
                musical proficiency. You can also browse our teachers on our
                roster page and share your teacher preferences. Other factors
                that go into a student-teacher match are your location and
                mutually agreeable schedules lining up.
              </p>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.question_container}>
              <p className={styles.question}>
                Can we cancel if we need to due to sickness, vacation, etc.?
              </p>
              <p className={styles.answer}>
                Learning to play an instrument is best done when exposure to it
                is consistent, so we expect consistency in our students’
                attendance. However, we understand that things happen that are
                out of your control, and offer reasonable flexibility to miss
                lessons on occasion. For details regarding cancellations, refer
                to our lesson policies.
              </p>
            </div>
            <div className={styles.question_container}>
              <p className={styles.question}>
                Where should I buy a guitar and supplies?
              </p>
              <p className={styles.answer}>
                <Link
                  className={styles.link}
                  href='https://www.guitarcenter.com/'
                  target='_blank'
                >
                  Guitar Center
                </Link>{' '}
                usually has the best deals on guitars and amps.{' '}
                <Link
                  className={styles.link}
                  href='https://www.guitarshowcase.com/'
                  target='_blank'
                >
                  Guitar Showcase
                </Link>{' '}
                is also a great place to look for reasonably priced instruments.
              </p>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.question_container}>
              <p className={styles.question}>
                What kind of guitar should I buy?
              </p>
              <p className={styles.answer}>
                We recommend going to a local music store and presenting that
                same question. The student should be present to make sure the
                guitar is a comfortable fit for them. Also, let the
                representative know what kind of music the student likes and the
                budget you have to spend on an instrument. From our experience,
                electric guitars are easier to play in the beginning, which is
                the crucial point where you want to make it as easy as possible
                for your child to progress with confidence. Unless he or she is
                going to be playing Classical, we suggest the electric guitar.
                Fender guitars are good starters for both electric and acoustic
                guitars.
              </p>
            </div>
            <div className={styles.question_container}>
              <p className={styles.question}>
                Do you have recitals or other performance opportunities?
              </p>
              <p className={styles.answer}>
                We know the importance of allowing young musicians the
                opportunity to grow in their art. Live performances offer an
                opportunity to show their loved ones how they have advanced in
                their playing, as well as an opportunity to feel more
                comfortable playing in front of an audience. With 2-3 recital
                opportunities given each year, we aspire to create a warm,
                encouraging atmosphere at our shows so that our students enjoy
                their experience and gain self-confidence in the process of
                performing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
