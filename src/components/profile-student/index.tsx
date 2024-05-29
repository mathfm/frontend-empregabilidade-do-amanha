import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

interface PerfilStudentProp {
  img: string;
  linkedin_url: string;
  github_url: string;
  name: string;
  email: string;
  description: string;
}

export function PerfilStudent({
  img,
  linkedin_url,
  github_url,
  name,
  email,
  description,
}: PerfilStudentProp) {
  return (
    <section className="flex mt-2 flex-col justify-evenly xl:w-[440px] h-[500px] xl:h-[690px] text-center rounded-xl p-4 bg-purple-800 items-center text-white">
      <figure className="md:w-36 w-32">
        <img src={img} className="w-full rounded-full" alt="" />
      </figure>
      <div className="flex flex-col gap-4">
        <h3>{name}</h3>
        <p>{email}</p>
        <p className="w-96 break-words ">{description}</p>
      </div>

      <div className="flex gap-4">
        <Link
          to={`https://github.com/${github_url}`}
          className="flex flex-col items-center gap-1 text-yellow-500 hover:text-white font-semibold"
          target="_blank"
          rel="nopenner norefferer"
        >
          <FaGithub className="md:text-5xl text-4xl" />
          <p className="no-underline">Github</p>
        </Link>

        <Link
          to={`https://www.linkedin.com/in/${linkedin_url}/`}
          className="flex flex-col items-center gap-1 text-yellow-500 hover:text-white font-semibold"
          target="_blank"
          rel="nopenner norefferer"
        >
          <FaLinkedin className="md:text-5xl text-4xl" />
          <p className="no-underline">Linkedin</p>
        </Link>
      </div>
    </section>
  );
}
