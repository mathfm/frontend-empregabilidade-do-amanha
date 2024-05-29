interface ITypeUser {
    typeUser: 'estudante' | 'colaborador';
    setTypeUser: (typeUser: 'estudante' | 'colaborador') => void;
}

export function TypeUser({ typeUser, setTypeUser }: ITypeUser) {
  return (
          <div className="flex items-center gap-5">
          <button className={`btn w-36 hover:text-black ${typeUser === 'estudante' ? 'bg-yellow-500 border-yellow-600 text-black hover:bg-yellow-600' : 'border-white bg-purple-950 text-white hover:bg-yellow-600 hover:text-black'}`}
              onClick={() => setTypeUser('estudante')}>
                  Estudante
              </button>
          <button className={`btn w-36 hover:text-black ${typeUser === 'colaborador' ? 'bg-yellow-500 border-yellow-600 text-black hover:bg-yellow-600' : 'border-white bg-purple-950 text-white hover:bg-yellow-600 hover:text-black'}`}
              onClick={() => setTypeUser('colaborador')}>
                  Colaborador
              </button>
          </div>
  )
}
