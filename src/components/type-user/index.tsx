interface ITypeUser {
    typeUser: 'estudante' | 'colaborador';
    setTypeUser: (typeUser: 'estudante' | 'colaborador') => void;
}

export function TypeUser({ typeUser, setTypeUser }: ITypeUser) {
  return (
          <div className="flex items-center gap-5">
              <button className={`btn w-36 hover:text-black ${typeUser === 'estudante' ? 'bg-yellow-500 border-yellow-600' : 'bg-purple-950 text-white'}`}
              onClick={() => setTypeUser('estudante')}>
                  Estudante
              </button>
              <button className={`btn w-36 hover:text-black ${typeUser === 'colaborador' ? 'bg-yellow-500 border-yellow-600' : 'bg-purple-950 text-white'}`}
              onClick={() => setTypeUser('colaborador')}>
                  Colaborador
              </button>
          </div>
  )
}
