import styles from "./CardJob.module.css";
import PropTypes from "prop-types";
export default function CardJob({title, description, link}) {
    return (
      <section className={styles["card"]}>
            <h2 className={styles["title-job"]}>{title}</h2>
            <div className={styles["container-text"]}>
                <p className={styles["description"]}>{description}</p>
            </div>
        <a
          href={link}
          className={styles["link-job"]}
          target="_blank"
          rel="nopenner norefferer"
        >
          Acessar Vaga
        </a>
      </section>
    );
}

CardJob.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
