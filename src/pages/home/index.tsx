import { useState } from "react";
import { ModalLogin } from "../modal-login";
import { ModalSignup } from "../modal-signup";

export function Home() {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalSignupOpen, setIsModalSignupOpen] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-img-home bg-cover bg-center">
    <section className="flex items-center justify-center w-full h-screen bg-img-home bg-cover bg-center">
      <ModalLogin
        isOpenLogin={isModalLoginOpen}
        setIsModalLoginOpen={setIsModalLoginOpen}
        setIsModalSignupOpen={setIsModalSignupOpen}
      />
      <ModalSignup
        isOpenSignup={isModalSignupOpen}
        setIsModalSignupOpen={setIsModalSignupOpen}
        setIsModalLoginOpen={setIsModalLoginOpen}
      />
      <div className="flex flex-col items-center justify-center text-center gap-6 w-full max-w-xl px-4">
        <h1 className="text-4xl text-white font-semibold">Empregabilidade do Amanhã</h1>
        <p className="text-xl font-medium text-white">
          <span className="text-yellow-500">&lt;/</span> Uma plataforma feita para mostrar o que os alunos
          fizeram ao longo do curso <span className="text-yellow-500">&gt;</span>
        </p>
        <div className="flex flex-col gap-4 w-full">
          <button
            className="btn text-lg text-white bg-purple-900 border-purple-950 hover:bg-purple-950 hover:text-white"
            onClick={() => setIsModalLoginOpen(true)}>
            Fazer login
          </button>
          <button className="btn text-lg text-black bg-yellow-500 border-yellow-600 hover:bg-yellow-600"
            onClick={() => setIsModalSignupOpen(true)}>
            Cadastrar-se
          </button>
        </div>
      </div>
    </section>
  );
}
