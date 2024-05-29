import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { CollaboratorModel } from "../../models/CollaboratorModel";
import { api } from '../../services/apiService';
import { JwtTokenModel } from "../../models/JwtTokenModel";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";


export function PerfilEditCollaborator() {
  const tokenDecode = jwtDecode<JwtTokenModel>(localStorage.getItem("token") || "");
  const authContextData = useContext(AuthContext);
  const _navigate = useNavigate();
  const [collaborator, setCollaborator] = useState<CollaboratorModel>();
  const { register, reset, handleSubmit } = useForm<CollaboratorModel>();

  useEffect(() => {
    async function loadCollaborator() {
      if (tokenDecode.id) {
        const request = await api.get(`/employer/${tokenDecode.id}`);
        setCollaborator(request.data);
      }
    }
    loadCollaborator();
  }, [tokenDecode.id])

  const updateCollaborator = async (data: CollaboratorModel) => {
    try {
      await api.put(
        `/employer/update/${tokenDecode.id}`,
        {
          name: data.name || collaborator?.name,
          email: data.email || collaborator?.email,
          password:  data.password || collaborator?.password,
        }
      );      
      reset();
      _navigate("/perfil-collaborator");
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar atualizar as informações.");
    }
  };

  const deleteCollaborator = async () => {
    try {
      await api.delete(`/employer/delete/${tokenDecode.id}`);
      _navigate("/");
      authContextData?.logout();
    } catch (error) {
      console.log("Erro ao tentar deletar o colaborador: ", error);
    }
  }

  return (
    <section className="w-full h-screen bg-purple-900 flex items-center justify-center flex-col">
      <form className="flex flex-col gap-8 md:w-[650px] md:h-[450px] bg-purple-950 p-10 rounded-md" onSubmit={handleSubmit(updateCollaborator)}>
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
        <div className="flex justify-center gap-4">
          <button className="btn bg-red-500 border-red-600 font-bold text-lg hover:bg-red-900 hover:text-white md:w-60 text-black" onClick={() => _navigate("/perfil-collaborator")}>Cancelar</button>
          <button type="submit" className="btn bg-yellow-500 border-yellow-600 font-bold text-lg md:w-60 text-black hover:bg-yellow-600">Atualizar Cadastro</button>
        </div>
        <button className="btn bg-red-500 text-black border-red-600 font-bold text-lg hover:bg-red-900 hover:text-white" onClick={deleteCollaborator}>Deletar Conta</button>
      </form>
    </section>
  );
}
