// import { useEffect, useState } from "react";
import axios from "axios";
import FormsUser from "../../components/forms-user/FormsUser";
import styles from "./StudentEditPerfil.module.css";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";




export default function StudentEditPerfil() {
  const { logout } = useContext(AuthContext);
  const decodeToken = jwtDecode(localStorage.getItem("token"));
  const deleteStudent = async () => {
    await axios.delete(`http://localhost:3000/api/student/delete/${decodeToken.id}`);
    logout();
    window.location.replace("/login");
    console.log("Conta foi com deus");
  }
  const updateUser = async (data) => {
    const findUser = await axios.get(`http://localhost:3000/api/student/${decodeToken.id}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
    console.log(findUser);
    const formsUpdatedUser = {
      name: data.name || findUser.data.name,
      email: data.email || findUser.data.email,
      password: data.password,
      github: data.github_url || findUser.data.github_url,
      linkedin: data.linkedin_url || findUser.data.linkedin_url,
      description: data.description || findUser.data.description,
    };

    await axios.put(`http://localhost:3000/api/student/update/${decodeToken.id}`, formsUpdatedUser);
  };

  const returnLink = () => {
    window.location.replace("/perfil-student");
  }

  return (
    <section className={styles["page-edit"]}>
      <FormsUser functionForms={updateUser} methodForm="Atualizar" linkReturn={returnLink}/>
      <button onClick={deleteStudent} className={styles["delete-btn"]}>Deletar conta</button>
    </section>
  );
}
