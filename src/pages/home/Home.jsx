import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <section className={styles["home-page"]}>
      <div className={styles["text-container"]}>
        <h1>Empregabilidade do Amanhã</h1>
        <p className={styles["text-paragraph"]}>
          <span>&lt;/</span> Uma plataforma feita para mostrar o que os alunos
          fizeram ao longo do curso <span>&gt;</span>
        </p>
        <div className={styles["container-btn-home"]}>
          {!isLoggedIn && (
            <Link
              to={"/login-student"}
              className={`${styles["link-home"]} ${styles["login"]}`}
            >
              Fazer login
            </Link>
          )}
          <a
            href="https://programadoresdoamanha.org/"
            target="_blank"
            rel="nopenner norefferer"
            className={styles["link-home"]}
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};
