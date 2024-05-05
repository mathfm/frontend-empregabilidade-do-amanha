import axios from "axios";
import FormsJob from "../../components/forms-job/FormsJob";
import { jwtDecode } from "jwt-decode";


export default function EditFormsJob() {
    const updateLinkJob = async (data) => {
        const tokenDecode = jwtDecode(localStorage.getItem("token"));
        await axios.put(`http://localhost:3000/api/job/update/${localStorage.getItem("id_job")}/${tokenDecode.id}/`, data);
        localStorage.removeItem("id_job");
        window.location.reload();
    }
    const returnLink = () => {
      window.location.replace("/perfil-collaborator");
    }
  return <FormsJob functionForms={updateLinkJob} methodForm="Atualizar" linkReturn={returnLink}/>;
}

