import styles from "./Header.module.css";
export const Header = () => {
    return (
        <header className={styles["header"]}>
            <figure className={styles["img-logo-header"]}>
                <img src="/src/assets/logo-site.svg" alt="" />
            </figure>
            <nav className={styles["nav-link-header"]}>
                <a href="#" className={styles["link-header"]}>Home</a>
                <a href="#" className={styles["link-header"]}>Sobre</a>
                <a href="#" className={styles["link-header"]}>Cadastre-se</a>
                <a href="#" className={styles["link-header"]}>Login</a>
            </nav>
        </header>
    )
}

