import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";


export const Header = () => {
  const authContext = useContext(AuthContext);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);


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

  const dashBoard =
    localStorage.getItem("type") === "student" ? "/perfil-estudante"
      : localStorage.getItem("type") === "collaborator" ? "/perfil-collaborator"
        : "/";  
  
  const editProfile = localStorage.getItem("type") === "student" ? "/perfil-estudante/edit"
    : localStorage.getItem("type") === "collaborator" ? "/perfil-colaborador/edit"
      : "/";  

  return (
    <header className="navbar bg-black/90 text-white h-30 flex-col md:flex-row">
      <div className="flex-1 w-32">
        <img className="h-12" src="/src/assets/logo-site.svg" alt="Marca do site" />
      </div>
      <nav className="flex-none">
        {authContext?.isLoggedIn && (
            <ul className="menu menu-horizontal px-1 text-xl mr-5">
              <li className="active:border-b-2 border-yellow-500 hover:text-yellow-500">
                <Link className="focus:text-white" to={"/estudantes"}>Estudantes</Link>
              </li>
              <li className="active:border-b-2 border-yellow-500 hover:text-yellow-500 ">
                <Link to={"/vagas"} className="focus:text-white">Vagas</Link>
              </li>
            
              {localStorage.getItem("type") === "collaborator" &&
                <li className="active:border-b-2  border-yellow-500 hover:text-yellow-500 ">
                  <Link to={"/publicar-vaga"} className="focus:text-white">Publicar Vaga</Link>
                </li>
              }
              <li>
                <details>
                  <summary className="hover:text-yellow-500 focus-visible:text-yellow-500 w-32 flex justify-center items-center">
                    Perfil
                  </summary>
                  <ul className="p-2 bg-black/90 rounded-t-none flex justify-center items-center flex-col z-50">
                    <li><Link className="focus:text-white" to={dashBoard}>Ver Perfil</Link></li>
                    <li><Link className="focus:text-white" to={editProfile}>Editar</Link></li>
                    <li><Link to={"/"} onClick={() => authContext.logout()}>Logout</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
        )}
      </nav>
    </header>
  );
};
