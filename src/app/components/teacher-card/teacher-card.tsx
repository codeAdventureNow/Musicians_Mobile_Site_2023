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
  const { card, cardTop } = styles;

  return (
    <div key={name} className={card}>
      <div className={cardTop}>
        <div>
          <h3 className={styles.teacher_name}>{name}</h3>
          <p className={styles.teacher_role}>{role}</p>
        </div>
        <Image
          className={styles.image}
          src={image}
          alt={alt}
          width={150}
          height={150}
          layout='intrinsic'
        />
      </div>
      <div className={styles.cardBottom}>
        <p>{bio}</p>
      </div>
    </div>
  );
};
