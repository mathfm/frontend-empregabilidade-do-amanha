import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const authContext = useContext(AuthContext);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100 && isHeaderVisible) {
        setIsHeaderVisible(false);
      } else if (scrollPosition <= 100 && !isHeaderVisible) {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderVisible]);

  return (
    <header className="navbar bg-purple-950 text-white h-30">
      <div className="flex-1 w-32">
        <img className="h-12" src="/src/assets/logo-site.svg" alt="Marca do site" />
      </div>
      <nav className="flex-none">
        {!logado && (
          <ul className="menu menu-horizontal px-1 text-xl mr-5">
            <li className="active:border-b-2 border-yellow-500 hover:text-yellow-500">
              <a>Home</a>
            </li>
            <li className="active:border-b-2 border-yellow-500 hover:text-yellow-500">
              <a>Login</a>
            </li>
            <li className="active:border-b-2 border-yellow-500 hover:text-yellow-500">
              <a>Cadastre-se</a>
            </li>
            
          </ul>
        )}
        {logado && (
          <ul className="menu menu-horizontal px-1 text-xl mr-5">
            <li className="active:border-b-2 border-yellow-500 hover:text-yellow-500">
              <a>Estudantes</a>
            </li>
            <li className="active:border-b-2 border-yellow-500 hover:text-yellow-500">
              <a>Publicar Vaga</a>
            </li>
            <li>
              <details>
                <summary className="hover:text-yellow-500 focus-visible:text-yellow-500">
                  Perfil
                </summary>
                <ul className="p-2 bg-purple-950 rounded-t-none">
                  <li><a>Editar</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </details>
            </li>
          </ul>
        )}
      </nav>
    </header>
    // <header
    //   className={`${styles["header"]} ${
    //     isHeaderVisible ? "" : styles["hidden"]
    //   }`}
    // >
    //   <figure className={styles["img-logo-header"]}>
    //     
    //   </figure>
    //   <nav className={styles["nav-link-header"]}>
    //     <Link to={"/"} className={styles["link-header"]}>
    //       Home
    //     </Link>
    //     <a href="#" className={styles["link-header"]}>
    //       Sobre
    //     </a>
    //     {!authContext?.isLoggedIn && (
    //       <>
    //         <Link to={"/register-student"} className={styles["link-header"]}>
    //           Cadastre-se
    //         </Link>
    //         <Link to={"/login-student"} className={styles["link-header"]}>
    //           Login
    //         </Link>
    //       </>
    //     )}
    //     {authContext?.isLoggedIn && (
    //       <>
    //         <Link to={"/student"} className={styles["link-header"]}>
    //           Estudantes
    //         </Link>
    //         <Link to={"/jobs"} className={styles["link-header"]}>
    //           Todas as vagas
    //         </Link>

    //         {localStorage.getItem("type") === "student" && (
    //           <>
    //             <Link
    //               to={"/perfil-student-edit"}
    //               className={styles["link-header"]}
    //             >
    //               Editar Perfil
    //             </Link>
    //             <Link to={"/perfil-student"} className={styles["link-header"]}>
    //               Perfil
    //             </Link>
    //             <Link
    //               to={"/login-student"}
    //               onClick={authContext.logout}
    //               className={styles["link-header"]}
    //             >
    //               Logout
    //             </Link>
    //           </>
    //         )}
    //         {localStorage.getItem("type") === "collaborator" && (
    //           <>
    //             <Link to={"/job-register"} className={styles["link-header"]}>
    //               Publicar vaga
    //             </Link>
    //             <Link
    //               to={"/perfil-collaborator-edit"}
    //               className={styles["link-header"]}
    //             >
    //               Editar Perfil
    //             </Link>
    //             <Link
    //               to={"/perfil-collaborator"}
    //               className={styles["link-header"]}
    //             >
    //               Perfil
    //             </Link>
    //             <Link
    //               to={"/login-collaborator"}
    //               onClick={authContext.logout}
    //               className={styles["link-header"]}
    //             >
    //               Logout
    //             </Link>
    //           </>
    //         )}
    //       </>
    //     )}
    //   </nav>
    // </header>
  );
};
