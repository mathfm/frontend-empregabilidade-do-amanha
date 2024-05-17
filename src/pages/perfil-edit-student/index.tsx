import { jwtDecode } from "jwt-decode";
import { AuthContext } from '../../context/AuthContext';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/apiService";
import { JwtTokenModel } from "../../models/JwtTokenModel";
import { StudentModel } from "../../models/StudentModel";
import { useNavigate } from "react-router-dom";




export function PerfilEditStudent() {
  const authContext  = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm<StudentModel>();
  const decodeToken = jwtDecode<JwtTokenModel>(localStorage.getItem("token") || "");
  const _navigate = useNavigate();
  const deleteStudent = async () => {
    await api.delete(`/student/delete/${decodeToken.id}`);
    authContext?.logout();
    _navigate("/");
  }
  const updateUser = async (data: StudentModel) => {
    const findUser = await api.get(`/student/${decodeToken.id}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
    const formsUpdatedUser = {
      name: data.name || findUser.data.name,
      email: data.email || findUser.data.email,
      password: data.password,
      github: data.github_url || findUser.data.github_url,
      linkedin: data.linkedin_url || findUser.data.linkedin_url,
      description: data.description || findUser.data.description,
    };
    await api.put(`/student/update/${decodeToken.id}`, formsUpdatedUser);
    reset();
  };


  return (
    <section className="w-full h-screen bg-purple-950 flex flex-col items-center justify-center">
      <form className="flex flex-col gap-5 w-[650px]" onSubmit={handleSubmit(updateUser)}>
        <label className="input input-bordered flex items-center gap-2">
          Nome
          <input type="text" className="grow" {...register("name")} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="email" className="grow" {...register("email")} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Senha
          <input type="password" className="grow" {...register("password")} required />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Github
          <input type="text" className="grow w-full" placeholder="/username" {...register("github_url")} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Linkedin
          <input type="text" className="grow w-full" placeholder="/name" {...register("linkedin_url")} />
        </label>

      <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg min-h-[220px] resize-none" maxLength={200} {...register("description")}></textarea>
        <div className="flex justify-center gap-4">
          <button className="btn w-40 bg-yellow-500 border-yellow-600 font-bold text-lg" onClick={() => _navigate("/perfil-estudante")}>Voltar</button>
          <button type="submit" className="btn w-40 bg-yellow-500 border-yellow-600 font-bold text-lg">Atualizar</button>
        </div>
        <button onClick={deleteStudent} className="btn bg-red-500 border-red-900 font-bold text-lg hover:text-white hover:bg-red-900">Deletar conta</button>
      </form>
    </section>
  );
}
