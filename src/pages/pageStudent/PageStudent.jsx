import { useEffect, useState } from "react";
import CardProfile from "../../components/card-profile/CardProfile";
import PerfilStudent from "../../components/profile-student/PerfilStudent";
import axios from "axios"
import styles from "./PageStudent.module.css";
export default function ProfileStudent() {
  const [repository, setRepository] = useState([]);
  useEffect(() => {
    async function loadRepositories() {
      const response = await axios.get(
        "https://api.github.com/users/mathfm/repos?sort=created&direction=desc"
      );
      const data = await response.data;
      console.log(data);
      setRepository(data);
    }

    loadRepositories();
  }, []);
  return (
    <section className={styles["container-page"]}>
      {
        repository.slice(0, 1).map((repo) => {
          return <PerfilStudent key={repo.id} img={repo.owner.avatar_url} />;
        })
      }
      <div className={styles["card"]}>
        {repository.length > 0 ? (
          repository
            .slice(0, 3)
            .map(({ description, name, id, html_url }) => (
              <CardProfile
                description={description}
                name_project={name}
                key={id}
                url_project={html_url}
              />
            ))
        ) : (
          <p>Carregando....</p>
        )}
      </div>
    </section>
  );
}
