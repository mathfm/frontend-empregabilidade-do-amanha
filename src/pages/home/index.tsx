import { useState } from "react";
import { ModalLogin } from "../modal-login";
import { ModalSignup } from "../modal-signup";


export function Home() {
  const [IsModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [IsModalSignupOpen, setIsModalSignupOpen] = useState(false);

  return (
    <section className="flex items-start justify-center w-full h-screen bg-img-home bg-cover bg-center">
      <ModalLogin
        isOpenLogin={IsModalLoginOpen}
        setIsModalLoginOpen={setIsModalLoginOpen}
        setIsModalSignupOpen={setIsModalSignupOpen}
      />
      <ModalSignup
        isOpenSignup={IsModalSignupOpen}
        setIsModalSignupOpen={setIsModalSignupOpen}
        setIsModalLoginOpen={setIsModalLoginOpen}
      />
      <div className="flex items-center flex-col text-center justify-center w-54 h-[800px] text-white gap-6">
        <h1 className="text-3xl font-semibold">Empregabilidade do Amanhã</h1>
        <p className="w-96 text-2xl font-medium">
          <span>&lt;/</span> Uma plataforma feita para mostrar o que os alunos
          fizeram ao longo do curso <span>&gt;</span>
        </p>
        <div className="flex flex-col gap-4 w-56">
          <button
            className="btn text-lg text-white bg-purple-900 border-purple-950 hover:text-black"
            onClick={() => setIsModalLoginOpen(true)}>
            Fazer login
          </button>
          <button className="btn text-lg text-black bg-yellow-500 border-yellow-600"
            onClick={() => setIsModalSignupOpen(true)}>
            Cadastra-se
          </button>
        </div>
      </div>
    </section>
  );
}
