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
    <section className="flex items-center justify-center w-[650px] h-52 p-4 bg-purple-800 text-white rounded-md">
      <div className="flex flex-col items-center text-center gap-2">
        <p>{name_project}</p>
        <p className="w-[500px] break-words">{description}</p>
        <Link
          to={url_project}
          className="px-4 py-2 font-semibold bg-purple-950 rounded-xl"
          target="_blank"
          rel="nopenner norefferer"
        >
          Conferir projeto
        </Link>
      </div>
    </section>
  );
}
