import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className={styles["header"]}>
      <figure className={styles["img-logo-header"]}>
        <img src="/src/assets/logo-site.svg" alt="" />
      </figure>
      <nav className={styles["nav-link-header"]}>
        <Link to={"/"} className={styles["link-header"]}>
          Home
        </Link>
        {!isLoggedIn && (
          <>
            <Link to={"/register-student"} className={styles["link-header"]}>
              Cadastre-se
            </Link>
            <Link to={"/login-student"} className={styles["link-header"]}>
              Login
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link to={"/student"} className={styles["link-header"]}>
              Estudantes
            </Link>
            <Link to={"/jobs"} className={styles["link-header"]}>
              Todas as vagas
            </Link>

            {localStorage.getItem("type") === "student" && (
              <>
                <Link
                  to={"/perfil-student-edit"}
                  className={styles["link-header"]}
                >
                  Editar Perfil
                </Link>
                <Link to={"/perfil-student"} className={styles["link-header"]}>
                  Perfil
                </Link>
                <Link
                  to={"/login-student"}
                  onClick={logout}
                  className={styles["link-header"]}
                >
                  Logout
                </Link>
              </>
            )}
            {localStorage.getItem("type") === "collaborator" && (
              <>
                <Link to={"/job-register"} className={styles["link-header"]}>
                  Publicar vaga
                </Link>
                <Link
                  to={"/perfil-collaborator-edit"}
                  className={styles["link-header"]}
                >
                  Editar Perfil
                </Link>
                <Link
                  to={"/perfil-collaborator"}
                  className={styles["link-header"]}
                >
                  Perfil
                </Link>
                <Link
                  to={"/login-collaborator"}
                  onClick={logout}
                  className={styles["link-header"]}
                >
                  Logout
                </Link>
              </>
            )}
          </>
        )}
        {/* {isLoggedIn && localStorage.getItem("type") == "student" && (
                    <>
                        <Link to={"/perfil-student-edit"} className={styles["link-header"]}>
                            Editar Perfil
                        </Link>
                        <Link to={"/perfil-student"} className={styles["link-header"]}>
                            Perfil
                        </Link>
                        <Link to={"/login-student"} onClick={logout} className={styles["link-header"]}>
                            Logout
                        </Link>
                    </>
                )}

                {isLoggedIn && localStorage.getItem("type") == "collaborator" && (
                    <>
                        <Link to={"/perfil-collaborator-edit"} className={styles["link-header"]}>
                            Editar Perfil
                        </Link>
                        <Link to={"/perfil-collaborator"} className={styles["link-header"]}>
                            Perfil
                        </Link>
                        <Link to={"/login-collaborator"} onClick={logout} className={styles["link-header"]}>
                            Logout
                        </Link>
                    </>
                )} */}
      </nav>
    </header>
  );
};
