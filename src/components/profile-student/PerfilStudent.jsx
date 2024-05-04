import styles from "./PerfilStudent.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import PropTypes from "prop-types";
export default function PerfilStudent({ img, linkedin_url, github_url, name, email, description }) {
  return (
    <section className={styles["profile-card"]}>
      <figure className={styles["image"]}>
        <img src={img} alt="" />
      </figure>
      <div className={styles["profile-info"]}>
        <h3>{name}</h3>
        <p>{email}</p>
          <p className={styles["description"]}>
            {description}
          </p>
      </div>

      <div className={styles["group-icon"]}>
        <a
          href={`https://github.com/${github_url}`}
          className={styles["link"]}
          target="_blank"
          rel="nopenner norefferer"
        >
          <FaGithub className={styles["icon"]} />
          <p className={styles["text-link"]}>Github</p>
        </a>

        <a
          href={`https://www.linkedin.com/in/${linkedin_url}/`}
          className={styles["link"]}
          target="_blank"
          rel="nopenner norefferer"
        >
          <FaLinkedin className={styles["icon"]} />
          <p className={styles["text-link"]}>Linkedin</p>
        </a>
      </div>
    </section>
  );
}

PerfilStudent.propTypes = {
  img: PropTypes.string.isRequired,
  linkedin_url: PropTypes.string.isRequired,
  github_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};