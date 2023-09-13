import styles from './about.module.css';
import Image from 'next/image';

const getPostsData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};
const getUsersData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const getDogData = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
};

export default async function About() {
  const [posts, users, dog] = await Promise.all([
    getPostsData(),
    getUsersData(),
    getDogData(),
  ]);

  return (
    <div>
      <Image src={dog.message} alt='dog' width={300} height={300} />
      {posts.map((post: any) => {
        return (
          <div key={post.userId}>
            <p>{post.title}</p>
          </div>
        );
      })}

      {users.map((user: any) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}
