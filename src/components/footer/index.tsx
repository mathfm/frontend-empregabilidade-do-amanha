import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="footer footer-center text-lg p-10 bg-base-200 text-white bg-black/90">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover hover:text-yellow-500">Sobre nós</a>
        <a className="link link-hover hover:text-yellow-500">Contato</a>
        <a className="link link-hover hover:text-yellow-500">Apoie um aluno</a>
        <a className="link link-hover hover:text-yellow-500">Mais sobre a instituição</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a><FaInstagram className="h-6 w-6 hover:text-yellow-500" /></a>
          <a><FaLinkedin className="h-6 w-6 hover:text-yellow-500" /></a>
          <a><FaGithub className="h-6 w-6 hover:text-yellow-500" /></a>
        </div>
      </nav>
      <aside>
        <p>© All coprights reserved to Squad 6 ❤️</p>
      </aside>
    </footer>
  )
}
