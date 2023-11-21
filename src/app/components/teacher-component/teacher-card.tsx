import styles from './teacher-card.module.css';
import Image from 'next/image';

export const TeacherCard = () => {
  const blueShirtNate = '/images/Nate_Pic.jpg';
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div>
            <h3>Nate Mueller</h3>
            <p>Front End Engineer</p>
          </div>
          <Image
            className={styles.image}
            src={blueShirtNate}
            alt='home music lesson'
            width={150}
            height={150}
            layout='intrinsic'
          ></Image>
        </div>
        <div className={styles.cardBottom}>
          <p>
            Nate Mueller is the president and founder of Musicians Mobile. He
            has been teaching music at local schools throughout the Bay Area
            since 2002. In 2003, Nate chose to take his teaching directly to
            students by providing lessons in their own homes, providing an added
            convenience for both the parents and students. Outside of teaching
            music, Nate is a successful music producer. He has provided
            entertainment for brands such as the Golden State Warriors and the
            US Olympic Team. Additionally, his compositions have been licensed
            to ABC,VH1, MTV, and featured on the hit show Modern Family.
          </p>
        </div>
      </div>
    </div>
  );
};
