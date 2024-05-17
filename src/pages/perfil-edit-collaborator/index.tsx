import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { CollaboratorModel } from "../../models/CollaboratorModel";
import { api } from '../../services/apiService';
import { JwtTokenModel } from "../../models/JwtTokenModel";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export function PerfilEditCollaborator() {
  const tokenDecode = jwtDecode<JwtTokenModel>(localStorage.getItem("token") || "");
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
      console.log("Erro ao tentar atualizar o colaborador: ", error);
    }
  };

  return (
    <section className="w-full h-screen bg-purple-900 flex items-center justify-center flex-col">
      <form className="flex flex-col gap-5 w-[650px] bg-purple-950 p-10 rounded-md" onSubmit={handleSubmit(updateCollaborator)}>
        <label className="input input-bordered flex items-center gap-2">
          Nome
          <input type="text" className="grow" {...register("name")} required />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="email" className="grow" {...register("email")} required />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Senha
          <input type="password" className="grow" {...register("password")} required />
        </label>
        <button type="submit" className="btn bg-yellow-500 border-yellow-600 font-bold text-lg">Atualizar Cadastro</button>
        <button className="btn bg-red-500 border-red-600 font-bold text-lg hover:bg-red-900 hover:text-white" onClick={() => _navigate("/perfil-collaborator")}>Cancelar</button>
      </form>
    </section>
  );
}
