import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <figure className={styles["img-footer"]}>
        <img src="/src/assets/logo-site.svg" alt="" className="img-footer" />
      </figure>
      <div className={styles["group-info"]}>
        <div className={styles["group-icon"]}>
          <a href="#">
            <FaInstagram className={styles["icon-footer"]} />
          </a>
          <a href="#">
            <FaLinkedin className={styles["icon-footer"]} />
          </a>
        </div>
        <p>© All coprights reserved to Squad 6 ❤️</p>
      </div>
      <div className={styles["text-group-info"]}>
        <h3>Quem somos?</h3>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </div>
    </footer>
  )
}


