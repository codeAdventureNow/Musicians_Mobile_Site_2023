import dynamic from 'next/dynamic';
import styles from './clients.module.css';

const DynamicClientComponent = dynamic(
  () => import('../components/client-component/client-component'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Clients() {
  return (
    <div className={styles.homepage}>
      <h2 className={styles.paragraph}>Clients page</h2>
      <section className={styles.section}>
        <div className={styles.container}>
          {' '}
          <DynamicClientComponent />
        </div>
      </section>
    </div>
  );
}
