import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section className={styles["home-page"]}>
      <div className={styles["text-container"]}>
        <h1>Empregabilidade do Amanhã</h1>
        <p className={styles["text-paragraph"]}>
          <span>&lt;/</span> Uma plataforma feita para mostrar o que os alunos
          fizeram ao longo do curso <span>&gt;</span>
        </p>
        <div className={styles["container-btn-home"]}>
          <Link
            to={"/login-student"}
            className={`${styles["link-home"]} ${styles["login"]}`}
          >
            Fazer login
          </Link>
          <Link to="#" className={styles["link-home"]}>
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
};
