import styles from '../footer/footer.module.css';

export const LoginButton = () => {
  return (
    <a className={styles.nav_links} href='/api/auth/login'>
      Log In
    </a>
  );
};
