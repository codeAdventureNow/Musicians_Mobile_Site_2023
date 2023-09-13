import styles from './about.module.css';

const getPostsData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

export default async function About() {
  const posts = await getPostsData();
  return (
    <div>
      {posts.map((post: any) => {
        return (
          <div key={post.userId}>
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
}
