import { Link } from "react-router-dom";
import styles from "./CardProfile.module.css";

interface CardProfileProp {
  name_project: string;
  description: string;
  url_project: string;
}
export default function CardProfile({
  name_project,
  description,
  url_project,
}: CardProfileProp) {
  return (
    <section className={styles["card-project"]}>
      <div className={styles["info-project"]}>
        <p>{name_project}</p>
        <p className={styles["description"]}>{description}</p>
        <Link
          to={url_project}
          className={styles["link-project"]}
          target="_blank"
          rel="nopenner norefferer"
        >
          Conferir projeto
        </Link>
      </div>
    </section>
  );
}
