import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="footer footer-center text-lg p-10 bg-base-200 text-white bg-black/90">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Sobre nós</a>
        <a className="link link-hover">Contato</a>
        <a href="https://programadoresdoamanha.org/apoie-um-aluno" className="link link-hover">Apoie um aluno</a>
        <a href="https://programadoresdoamanha.org/" className="link link-hover">Mais sobre a instituição</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/programadoresdoamanha/"><FaInstagram className="h-6 w-6" /></a>
          <a href="https://www.linkedin.com/company/programadoresdoamanha/"><FaLinkedin className="h-6 w-6" /></a>
          <a href="https://github.com/mathfm/frontend-empregabilidade-do-amanha"><FaGithub className="h-6 w-6" /></a>
        </div>
      </nav>
      <aside>
        <p>© All coprights reserved to Squad 6 ❤️</p>
      </aside>
    </footer>
  )
}
