import styles from './yelp-api.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { UserCircleIcon, StarIcon } from '@heroicons/react/solid';

interface Post {
  posts?: number;
  id: string;
  url: string;
  time_created: string;
  text: string;
  rating: number;
  user: {
    profile_url: string;
    image_url: string;
    name: string;
  };
}

const YelpWidget = ({
  id,
  url,
  time_created,
  text,
  rating,
  user,
  posts,
}: Post) => {
  function convertDate(date: string) {
    const convertedDate = new Date(date);
    return new Intl.DateTimeFormat('en-US').format(convertedDate);
  }

  function starRating(postRatings: number) {
    if (postRatings === 5) {
      return (
        <div className={styles.star_collection}>
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
        </div>
      );
    } else if (postRatings === 4) {
      return (
        <div className={styles.star_collection}>
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
        </div>
      );
    } else if (postRatings === 3) {
      return (
        <div className={styles.star_collection}>
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
        </div>
      );
    } else if (postRatings === 2) {
      return (
        <div className={styles.star_collection}>
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
        </div>
      );
    } else {
      return (
        <div className={styles.star_collection}>
          <StarIcon className={styles.star} />
        </div>
      );
    }
  }

  return (
    <div className={styles.reviews_widget} key={id}>
      <div className={styles.widget_top}>
        <div className={styles.widget_top_left}>
          <Link className={styles.company_name} target='_blank' href={url}>
            Musicians Mobile
          </Link>
          <Link className={styles.total_reviews} target='_blank' href={url}>
            <p>{posts} Reviews</p>
          </Link>
        </div>
        <div className={styles.widget_top_right}>
          <Link target='_blank' href={url}>
            <Image
              src='/images/yelp_social_icon.png'
              alt='yelp profile image'
              width={25}
              height={25}
              layout='intrinsic'
            ></Image>
          </Link>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.widget_middle}>
        <div className={styles.name_image}>
          {user.image_url ? (
            <Link target='_blank' href={user.profile_url}>
              <Image
                className={styles.profile_image}
                src={user.image_url}
                alt='yelp profile image'
                width={20}
                height={20}
                layout='intrinsic'
              ></Image>
            </Link>
          ) : (
            <Link target='_blank' href={user.profile_url}>
              <UserCircleIcon className={styles.profile_icon} />
            </Link>
          )}
          <Link target='_blank' href={user.profile_url}>
            <p className={styles.user_name}>{user.name}</p>
          </Link>
        </div>
        <div className={styles.stars_plus_date}>
          <Link className={styles.company_name} target='_blank' href={url}>
            {starRating(rating)}
          </Link>
          <Link className={styles.date} target='_blank' href={url}>
            <p>{convertDate(time_created)}</p>
          </Link>
        </div>

        <p>{text}</p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.widget_bottom}>
        <Link className={styles.read_Yelp} target='_blank' href={url}>
          Read More On Yelp
        </Link>
      </div>
    </div>
  );
};

export default YelpWidget;
