import dynamic from 'next/dynamic';
import styles from './clients.module.css';
import Header from '../components/header/header';

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
      <div className={styles.paragraph}>
        <Header title='Clients' />
      </div>
      <section className={styles.section}>
        <div className={styles.container}>
          {' '}
          <DynamicClientComponent />
        </div>
      </section>
    </div>
  );
}
