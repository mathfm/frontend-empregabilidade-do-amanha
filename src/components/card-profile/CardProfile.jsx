import styles from "./CardProfile.module.css";
import PropTypes from "prop-types";
export default function CardProfile({
  name_project,
  description,
  url_project,
}) {
  return (
    <section className={styles["card-project"]}>
      <div className={styles["info-project"]}>
        <p>{name_project}</p>
        <p className={styles["description"]}>{description}</p>
        <a
          href={url_project}
          className={styles["link-project"]}
          target="_blank"
          rel="nopenner norefferer"
        >
          Conferir projeto
        </a>
      </div>
    </section>
  );
}

CardProfile.propTypes = {
  name_project: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url_project: PropTypes.string.isRequired,
};