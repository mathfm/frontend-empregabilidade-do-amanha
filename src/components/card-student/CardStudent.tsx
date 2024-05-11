import { Link } from "react-router-dom";
import styles from "./CardStudent.module.css";

interface CardStudentProp {
  img: string;
  linkPerfil: string;
  description: string;
}

export default function CardStudent({
  img,
  linkPerfil,
  description,
}: CardStudentProp) {
  return (
    <section className={styles["card"]}>
      <div className={styles["perfil-photo"]}>
        <figure className={styles["photo"]}>
          <img src={img} alt="" />
        </figure>
        <Link to={linkPerfil} className={styles["link-perfil"]}>
          Ver Perfil
        </Link>
      </div>
      <p className={styles["description-card"]}>{description}</p>
    </section>
  );
}
