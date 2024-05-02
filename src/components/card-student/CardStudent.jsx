import styles from "./CardStudent.module.css";
import PropTypes from "prop-types";
export default function CardStudent({img, linkPerfil, description}) {
  return (
    <section className={styles["card"]}>
      <div className={styles["perfil-photo"]}>
        <figure className={styles["photo"]}>
          <img src={img} alt="" />
        </figure>
        <a href={linkPerfil} className={styles["link-perfil"]}>
          Ver Perfil
        </a>
      </div>
      <p className={styles["description-card"]}>
        {description}
      </p>
    </section>
  )
}

CardStudent.propTypes = {
  img: PropTypes.string.isRequired,
  linkPerfil: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};