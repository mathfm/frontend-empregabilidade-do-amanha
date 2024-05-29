import { FormsJob } from "../../components/forms-job";
import { jwtDecode } from "jwt-decode";
import { JobModel } from "../../models/JobModel";
import { JwtTokenModel } from "../../models/JwtTokenModel";
import { api } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export function RegisterJob() {
  const _navigate = useNavigate();
  const registerJob = async (data: JobModel) => {
    
    const tokenDecode = jwtDecode<JwtTokenModel>(localStorage.getItem("token") || "");
    
    try {
      await api.post(`/job/create/${tokenDecode.id}`, data);      
      _navigate(0);
      toast.success("Sua vaga foi cadastrada com sucesso!");
    } catch (error) {
      toast.error("Ocorreu um erro, não foi possivel registrar a vaga.");
    }
  }
  const returnLink = () => {
    _navigate("/perfil-collaborator");
  }
  return (
    <div className="bg-purple-900 h-screen flex items-center justify-center">
      <FormsJob functionForms={registerJob} methodForm="Registrar" linkReturn={returnLink}/>
    </div>
  )
}
