import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <figure className="img-footer">
        <img src="/src/assets/logo-site.svg" alt="" />
      </figure>
      <div className={styles["group-info"]}>
        <div className={styles["group-icon"]}>
          <Link to="#">
            <FaInstagram className={styles["icon-footer"]} />
          </Link>
          <Link to="#">
            <FaLinkedin className={styles["icon-footer"]} />
          </Link>
        </div>
        <p>© All coprights reserved to Squad 6 ❤️</p>
      </div>
      <div className={styles["text-group-info"]}>
        <h3>Quem somos?</h3>
        <Link to="#">Sobre</Link>
        <Link to="#">Contato</Link>
      </div>
    </footer>
  );
};
