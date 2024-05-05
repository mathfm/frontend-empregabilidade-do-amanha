import axios from "axios";
import FormsCollaborator from "../../components/forms-collaborator/FormsCollaborator";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export default function EditPerfilCollaborator() {
    const { reset } = useForm();
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
  return (
    <FormsCollaborator functionForms={updateCollaborator} methodPost="Atualizar" linkReturn={returnLink}/>
  )
}
