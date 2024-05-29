interface ICardJob {
  title: string;
  description: string;
  link: string;
  isCollaborator: boolean;
  deleteCard?: () => void;
  editCard?: () => void;
}

export default function CardJob({ title, description, link, isCollaborator, deleteCard, editCard }: ICardJob) {
  return (
    <div className={`card ${isCollaborator ? "md:w-[700px] w-[350px] md:h-[350px] h-[450px]" : "md:w-[550px] w-[350px] md:h-[300px] h-[450px]"} bg-purple-800 text-white border-yellow-500 transition-transform transform hover:scale-95 my-0.5 mx-4 mt-6 mb-6`}>
      <div className="card-body gap-4">
        <h2 className="card-title">{title}</h2>
        <p className="md:w-[500px] w-[300px] break-words">{description}</p>
        <div className="flex justify-center">
          <a href={link} className="bg-purple-950 hover:bg-white hover:text-black py-2 px-4 rounded-lg font-semibold" target="_blank" rel="nopenner norefferer">Acessar vaga</a>
        </div>
        {isCollaborator && (
          <>
            <div className="card-actions justify-center gap-8">
              <button className="btn w-28 bg-red-500 hover:bg-red-700 text-white border-red-900" onClick={deleteCard}>Deletar</button>
              <button className="btn w-28 text-black hover:bg-yellow-600 bg-yellow-500 border-yellow-800" onClick={editCard}>Editar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
