import styles from './teacher-card.module.css';
import Image from 'next/image';

interface Teacher {
  name: string;
  image: string;
  role: string;
  alt: string;
  bio: string;
}

export const TeacherCard = ({ name, image, role, alt, bio }: Teacher) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div>
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
          <Image
            className={styles.image}
            src={image}
            alt={alt}
            width={150}
            height={150}
            layout='intrinsic'
          ></Image>
        </div>
        <div className={styles.cardBottom}>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};
