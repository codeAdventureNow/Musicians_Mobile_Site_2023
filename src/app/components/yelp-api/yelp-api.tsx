import styles from './yelp-api.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { UserCircleIcon, StarIcon } from '@heroicons/react/solid';

//TODO: this function shouldn't be global scope
const getPostsData = async () => {
  const res = await fetch(
    'https://api.yelp.com/v3/businesses/musicians-mobile-san-jose/reviews',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer sE7J9a4whsAuirarCMct3DYLxYtgIVaJ5P6waWRiUD3lg1XnQgAtCYa-VsxQL0QiQNFg11evNbIiEID1gpMmG6BVa90Ww-PvpZTBKdz_Kr13kJOdFuPyE13T44wEZXYx',
      },
    }
  );
  return res.json();
  //TODO: consider adding a fallback ie. if the fetch fails, return an empty array or what happens if an error occurs?
};

//TODO: this component doesn't need async/await - you've used fetch on line 9 which would utilise NextJS's built in Data fetching - https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
export default async function Yelp_API() {
  const posts = await getPostsData();

  // TODO: you can move this into a different file and import it as you can use this in multiple places
  function convertDate(date: string) {
    const convertedDate = new Date(date);
    return new Intl.DateTimeFormat('en-US').format(convertedDate);
  }

  // TODO: you can refactor this function better - you don't need to implicity return each StarIcon
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

  //NIT: consider moving this to the top of the file so it's clearer for other developers what the Post type is
  type Post = {
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
  };

  return (
    <div className={styles.container}>
      {posts.reviews.map((post: Post) => (
        <div className={styles.reviews_widget} key={post.id}>
          <div className={styles.widget_top}>
            <div className={styles.widget_top_left}>
              <Link
                className={styles.company_name}
                target='_blank'
                href={post.url}
              >
                Musicians Mobile
              </Link>
              <Link
                className={styles.total_reviews}
                target='_blank'
                href={post.url}
              >
                <p>{posts.total} Reviews</p>
              </Link>
            </div>
            <div className={styles.widget_top_right}>
              <Link target='_blank' href={post.url}>
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
              {post.user.image_url ? (
                <Link target='_blank' href={post.user.profile_url}>
                  <Image
                    className={styles.profile_image}
                    src={post.user.image_url}
                    alt='yelp profile image'
                    width={20}
                    height={20}
                    layout='intrinsic'
                  ></Image>
                </Link>
              ) : (
                <Link target='_blank' href={post.user.profile_url}>
                  <UserCircleIcon className={styles.profile_icon} />
                </Link>
              )}
              <Link target='_blank' href={post.user.profile_url}>
                <p className={styles.user_name}>{post.user.name}</p>
              </Link>
            </div>
            <div className={styles.stars_plus_date}>
              <Link
                className={styles.company_name}
                target='_blank'
                href={post.url}
              >
                {starRating(post.rating)}
              </Link>
              <Link className={styles.date} target='_blank' href={post.url}>
                <p>{convertDate(post.time_created)}</p>
              </Link>
            </div>

            <p>{post.text}</p>
          </div>
          <hr className={styles.hr} />
          <div className={styles.widget_bottom}>
            <Link className={styles.read_Yelp} target='_blank' href={post.url}>
              Read More On Yelp
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
