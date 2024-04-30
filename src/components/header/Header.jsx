
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export const Header = () => {
    return (
        <header className={styles["header"]}>
            <figure className={styles["img-logo-header"]}>
                <img src="/src/assets/logo-site.svg" alt="" />
            </figure>
            <nav className={styles["nav-link-header"]}>
                <Link to={"/"} className={styles["link-header"]}>Home</Link>
                <a href="#" className={styles["link-header"]}>Sobre</a>
                <Link to={"/register-student"} className={styles["link-header"]}>Cadastre-se</Link>
                <Link to={"/login"} className={styles["link-header"]}>Login</Link>
            </nav>
        </header>
    )
}

