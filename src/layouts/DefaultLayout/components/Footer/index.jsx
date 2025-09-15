import styles from "./Footer.module.scss";

export default function Footer() {
    return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>MyWebsite</div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
        <div className={styles.copy}>
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}