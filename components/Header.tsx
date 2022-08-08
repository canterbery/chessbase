import styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <span className={styles.headlineText}>DATABASE</span>
        <span className={styles.headlineSubText}>by Phantommail</span>
      </div>
    </div>
  );
};
