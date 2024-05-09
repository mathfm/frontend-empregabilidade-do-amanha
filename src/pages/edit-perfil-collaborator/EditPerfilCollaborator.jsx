import axios from "axios";
import FormsCollaborator from "../../components/forms-collaborator/FormsCollaborator";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import styles from "./EditPerfilCollaborator.module.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export default function EditPerfilCollaborator() {
  const { reset } = useForm();
  const { logout } = useContext(AuthContext);
    const tokenDecode = jwtDecode(localStorage.getItem("token"));
    const updateCollaborator = async (data) => {
        try {
            await axios.put(`http://localhost:3000/api/employer/update/${tokenDecode.id}`, data);
            reset();
            window.location.replace("/perfil-collaborator");
        } catch (error) {
            console.log("Erro ao tentar atualizar o colaborador: ", error);
        }
    }
    const returnLink = () => {
      window.location.replace("/perfil-collaborator");
  }
  
  const deleteCollaborator = async () => {
    await axios.delete(
      `http://localhost:3000/api/employer/delete/${tokenDecode.id}`
    );
    logout();
    window.location.replace("/");
    console.log("Conta foi com deus");
  };
  return (
    <div className={styles["page-edit-collaborator"]}>
      <FormsCollaborator functionForms={updateCollaborator} methodPost="Atualizar" linkReturn={returnLink} />
      <button onClick={deleteCollaborator} className={styles["delete-btn"]}>Deletar conta</button>
    </div>
  )
}
