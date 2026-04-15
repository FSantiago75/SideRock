import styles from "./styles.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className={styles.link}>
        Go back to Home
      </a>
    </div>
  );
};
