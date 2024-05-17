import { Link } from "react-router-dom";

interface CardStudentProp {
  img: string;
  linkPerfil: string;
  description: string;
}

export default function CardStudent({
  img,
  linkPerfil,
  description,
}: CardStudentProp) {
  return (
    <section className="w-[600px] h-52 flex items-center justify-around p-1 rounded-lg text-white bg-purple-800">
      <div className="flex flex-col gap-4 items-center justify-center">
        <figure>
          <img className="w-20 rounded-full" src={img} alt="foto de perfil do estudante" />
        </figure>
        <Link to={linkPerfil} className="bg-yellow-500 rounded-xl font-semibold text-black px-4 py-1">
          Ver Perfil
        </Link>
      </div>
      <p className="py-4 px-2 bg-purple-950 w-[400px] rounded-xl break-words">{description}</p>
    </section>
  );
}
