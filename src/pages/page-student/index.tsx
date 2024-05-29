import {useEffect, useState } from "react";
import CardProfile from "../../components/card-profile";
import {PerfilStudent} from "../../components/profile-student";
import axios from "axios"
import { jwtDecode } from "jwt-decode";
import { api } from "../../services/apiService";
import { JwtTokenModel } from "../../models/JwtTokenModel";
import { StudentModel } from "../../models/StudentModel";
import { ProjectModel } from "../../models/ProjectModel";




export function PageStudent() {
  const [repository, setRepository] = useState<ProjectModel[]>();
  const [user, setUser] = useState<StudentModel>();
  const decodeToken = jwtDecode<JwtTokenModel>(localStorage.getItem("token") || "");

  useEffect(() => {
    async function loadRepositories() {
      const findUser = await api.get(`/student/${decodeToken.id}`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
      });

        setUser(findUser.data);
        const response = await axios.get(
          `https://api.github.com/users/${findUser.data.github_url}/repos?sort=created&direction=desc`
        );
        const data = await response.data;
        setRepository(data);
        
    }

    if (localStorage.getItem("id_student") !== null) {      
      api.get(`/student/${localStorage.getItem("id_student")}`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") }
      })
        .then((resp) => {
          setUser(resp.data);
          axios.get(`https://api.github.com/users/${resp.data.github_url || ""}/repos?sort=created&direction=desc`)
            .then((github) => {
              setRepository(github.data);
              localStorage.removeItem("id_student");
            });
        })
    }

    else if (decodeToken.type === "student") {
      loadRepositories();
    }




  }, [decodeToken.id, decodeToken.id_student, decodeToken.type]);

  
  
  
  
  return (
    <section className="w-full min-h-svh flex flex-col xl:flex-row gap-4 items-center justify-center bg-purple-950">
      {
        repository?.length !== undefined && repository.slice(0, 1).map((repo) => {
          return <PerfilStudent
            key={repo.id}
            img={repo.owner.avatar_url || "/src/assets/img-profile-2.jpg"}
            github_url={user?.github_url || "#"}
            linkedin_url={user?.linkedin_url || "#"}
            description={user?.description || ""}
            email={user?.email || ""}
            name={user?.name || ""} />;
          
        })
      }
      <div className="flex flex-col gap-4 justify-center">
        {repository?.length !== undefined && repository.length > 0 ? (
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
            <p className="text-white text-3xl">Repositório não encontrado.</p>
        )}
      </div>
    </section>
  );
}
