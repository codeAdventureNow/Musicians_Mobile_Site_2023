import styles from '../footer/footer.module.css';

export const LogoutButton = () => {
  return (
    <a className={styles.nav_links} href='/api/auth/logout'>
      Log Out
    </a>
  );
};
