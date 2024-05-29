import { Link } from "react-router-dom";

interface ICardProfile {
  name_project: string;
  description: string;
  url_project: string;
}

export default function CardProfile({
  name_project,
  description,
  url_project,
}: ICardProfile) {
  return (
    <section className="flex items-center justify-center md:w-[650px] w-[400px] md:h-52 h-[300px] p-4 bg-purple-800 text-white rounded-md transition-transform transform hover:scale-95 my-1.5 mx-1.5">
      <div className="flex flex-col items-center text-center gap-2">
        <p>{name_project}</p>
        <p className="md:w-[500px] break-words">{description}</p>
        <Link
          to={url_project}
          className="px-4 py-2 font-semibold bg-purple-950 hover:bg-white hover:text-black rounded-xl"
          target="_blank"
          rel="noreferrer noopener"
        >
          Conferir projeto
        </Link>
      </div>
    </section>
  );
}
