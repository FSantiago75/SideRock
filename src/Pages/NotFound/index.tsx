import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 — Página não encontrada</h1>
      <p className={styles.message}>
        O endereço que você procurou não existe.
      </p>
      <Link to="/" className={styles.link}>
        Conhecer nossas experiências
      </Link>
    </div>
  );
};
