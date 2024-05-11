import { Link } from "react-router-dom";
import styles from "./PerfilStudent.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

interface PerfilStudentProp {
  img: string;
  linkedin_url: string;
  github_url: string;
  name: string;
  email: string;
  description: string;
}

export default function PerfilStudent({
  img,
  linkedin_url,
  github_url,
  name,
  email,
  description,
}: PerfilStudentProp) {
  return (
    <section className={styles["profile-card"]}>
      <figure className={styles["image"]}>
        <img src={img} alt="" />
      </figure>
      <div className={styles["profile-info"]}>
        <h3>{name}</h3>
        <p>{email}</p>
        <p className={styles["description"]}>{description}</p>
      </div>

      <div className={styles["group-icon"]}>
        <Link
          to={`https://github.com/${github_url}`}
          className={styles["link"]}
          target="_blank"
          rel="nopenner norefferer"
        >
          <FaGithub className={styles["icon"]} />
          <p className={styles["text-link"]}>Github</p>
        </Link>

        <Link
          to={`https://www.linkedin.com/in/${linkedin_url}/`}
          className={styles["link"]}
          target="_blank"
          rel="nopenner norefferer"
        >
          <FaLinkedin className={styles["icon"]} />
          <p className={styles["text-link"]}>Linkedin</p>
        </Link>
      </div>
    </section>
  );
}
