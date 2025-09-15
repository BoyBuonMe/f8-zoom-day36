import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.content}>
      <div className={styles.loading}>
      </div>
        <span>Loading...</span>
    </div>
  );
}
