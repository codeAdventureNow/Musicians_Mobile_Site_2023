import styles from './about.module.css';
import Image from 'next/image';

const getPostsData = async () => {
  const res = await fetch(
    'https://api.yelp.com/v3/businesses/{musicians-mobile-san-jose}/reviews'
  );
  return res.json();
};

export default async function About() {
  const posts = await getPostsData();

  console.log(posts);

  return (
    <div>
      {/* {posts.map((post: any) => {
        return (
          <div key={post.userId}>
            <p>{post.title}</p>
          </div>
        );
      })} */}
    </div>
  );
}
