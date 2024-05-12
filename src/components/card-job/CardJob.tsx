import { Link } from "react-router-dom";
import styles from "./CardJob.module.css";

interface CardJobProp {
  title: string;
  description: string;
  link: string;
}

export default function CardJob({ title, description, link }: CardJobProp) {
  return (
    <section className={styles["card"]}>
      <h2 className={styles["title-job"]}>{title}</h2>
      <div className={styles["container-text"]}>
        <p className={styles["description"]}>{description}</p>
      </div>
      <Link
        to={link}
        className={styles["link-job"]}
        target="_blank"
        rel="nopenner norefferer"
      >
        Acessar Vaga
      </Link>
    </section>
  );
}
