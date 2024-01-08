import styles from '../footer/footer.module.css';

export const SignupButton = () => {
  return (
    <a className={styles.nav_links} href='/api/auth/signup'>
      Sign Up
    </a>
  );
};
