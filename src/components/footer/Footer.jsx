import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <figure className={styles["img-footer"]}>
        <img src="/src/assets/logo-site.svg" alt="" />
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
        <a
          href="https://programadoresdoamanha.org/"
          target="_blank"
          rel="nopenner norefferer"
        >
          Sobre
        </a>
        <a
          href="https://programadoresdoamanha.org/apoie-um-aluno"
          target="_blank"
          rel="nopenner norefferer"
        >
          Aopie um Aluno
        </a>
      </div>
    </footer>
  );
}


