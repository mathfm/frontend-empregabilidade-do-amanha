import styles from "./CardStudent.module.css";
import PropTypes from "prop-types";
export default function CardStudent({ description, linkLinkedin, linkGithub }) {
  return (
    <section className={styles["card"]}>
      <div className={styles["perfil-photo"]}>
        <figure className={styles["photo"]}>
          <img src={"/src/assets/img-profile-2.jpg"} alt="" />
        </figure>
        <div className={styles["container-btn"]}>
          <a
            href={`https://github.com/${linkGithub}`}
            className={styles["link-perfil"]}
            target="_blank"
            rel="nopenner norefferer"
          >
            Github
          </a>
          <a
            href={`https://www.linkedin.com/in/${linkLinkedin}`}
            className={styles["link-perfil"]}
            target="_blank"
            rel="nopenner norefferer"
          >
            Liknedin
          </a>
        </div>
      </div>
      <p className={styles["description-card"]}>
        {`${description.slice(0, 200)}....`}
      </p>
    </section>
  );
}

CardStudent.propTypes = {
  linkLinkedin: PropTypes.string.isRequired,
  linkGithub: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};