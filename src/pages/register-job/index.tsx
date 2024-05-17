import { FormsJob } from "../../components/forms-job";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { JobModel } from "../../models/JobModel";
import { JwtTokenModel } from "../../models/JwtTokenModel";
import { api } from "../../services/apiService";
import { useNavigate } from "react-router-dom";


export function RegisterJob() {
  const { reset } = useForm<JobModel>();
  const _navigate = useNavigate();
  const registerJob = async (data: JobModel) => {
    
    const tokenDecode = jwtDecode<JwtTokenModel>(localStorage.getItem("token") || "");

    
    try {
      await api.post(`/job/create/${tokenDecode.id}`, data);      
      reset();
      _navigate(0)
    } catch (error) {
      console.log(error);
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
