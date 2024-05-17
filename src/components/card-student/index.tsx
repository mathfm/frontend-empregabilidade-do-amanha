import { useNavigate } from "react-router-dom";

interface ICardStudent {
  description: string;
  id: string;
}

export default function CardStudent({
  id,
  description,
}: ICardStudent) {
  const _navigate = useNavigate();
  const redirectStudent = () => {
    localStorage.setItem("id_student", id);
    _navigate(`/perfil-estudante/`);
  }
  
  return (
    <section className="w-[600px] h-52 flex items-center justify-around p-1 rounded-lg text-white bg-purple-950">
      <div className="flex flex-col gap-4 items-center justify-center">
        <figure>
          <img className="w-20 rounded-full" src="/src/assets/img-profile-2.jpg" alt="foto de perfil do estudante" />
        </figure>
        <button onClick={redirectStudent} className="bg-yellow-500 rounded-xl font-semibold text-black px-4 py-1">
          Ver Perfil
        </button>
      </div>
      <p className="py-4 px-2 bg-purple-900 w-[400px] rounded-xl break-words">{description}</p>
    </section>
  );
}
