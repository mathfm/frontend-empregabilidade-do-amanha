import {useEffect, useState } from "react";
import CardProfile from "../../components/card-profile/CardProfile";
import PerfilStudent from "../../components/profile-student/PerfilStudent";
import axios from "axios"
import styles from "./PageStudent.module.css";
import { jwtDecode } from "jwt-decode";

export default function ProfileStudent() {
  const [repository, setRepository] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function loadRepositories() {
      const decodeToken = jwtDecode(localStorage.getItem("token"));
      const findUser = await axios.get(`http://localhost:3000/api/student/${decodeToken.id}`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
      });
      setUser(findUser.data);

      const response = await axios.get(
        `https://api.github.com/users/${findUser.data.github_url}/repos?sort=created&direction=desc`
      );
      const data = await response.data;
      setRepository(data);
    }

    loadRepositories();
  }, []);
  return (
    <section className={styles["container-page"]}>
      {
        repository.slice(0, 1).map((repo) => {
          return <PerfilStudent
            key={repo.id}
            img={repo.owner.avatar_url}
            github_url={user.github_url}
            linkedin_url={user.linkedin_url}
            description={user.description}
            email={user.email}
            name={user.name} />;
          
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
