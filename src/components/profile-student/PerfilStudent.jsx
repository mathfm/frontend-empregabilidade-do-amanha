import styles from "./PerfilStudent.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import PropTypes from "prop-types";
export default function PerfilStudent({img}) {
  return (
    <section className={styles["profile-card"]}>
      <figure className={styles["image"]}>
        <img src={img} alt="" />
      </figure>
      <div className={styles["profile-info"]}>
        <h3>Fernando Matheus M Dos Santos</h3>
        <p>fernando@example123.com</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deleniti
          dolorem, a reiciendis sint neque, ad corporis vitae ea excepturi nemo.
          Accusamus eveniet illum natus inventore sit tenetur itaque dolores.
        </p>
      </div>

      <div className={styles["group-icon"]}>
        <a href="#" className={styles["link"]}>
          <FaGithub className={styles["icon"]} />
          <p className={styles["text-link"]}>Github</p>
        </a>

        <a href="#" className={styles["link"]}>
          <FaLinkedin className={styles["icon"]} />
          <p className={styles["text-link"]}>Linkedin</p>
        </a>
      </div>
    </section>
  );
}

PerfilStudent.propTypes = {
  img: PropTypes.string.isRequired,
};