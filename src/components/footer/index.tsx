import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="footer footer-center text-lg p-10 bg-base-200 text-white bg-black/90">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover hover:text-yellow-500" href="#" >Sobre nós</a>
        <a className="link link-hover hover:text-yellow-500" href="https://programadoresdoamanha.org/" target="black_" rel="external">Contato</a>
        <a className="link link-hover hover:text-yellow-500" href="https://programadoresdoamanha.org/apoie-um-aluno" target="black_" rel="external">Apoie um aluno</a>
        <a className="link link-hover hover:text-yellow-500" href="https://programadoresdoamanha.org/" target="black_" rel="external">Mais sobre a instituição</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/programadoresdoamanha/" target="black_" rel="external"><FaInstagram className="h-6 w-6 hover:text-yellow-500" /></a>
          <a  href="https://www.linkedin.com/school/programadoresdoamanha/posts/?feedView=all" target="black_" rel="external"><FaLinkedin className="h-6 w-6 hover:text-yellow-500" /></a>
          <a  href="https://github.com/mathfm/frontend-empregabilidade-do-amanha" target="black_" rel="external"><FaGithub className="h-6 w-6 hover:text-yellow-500" /></a>
        </div>
      </nav>
      <aside>
        <p>© All coprights reserved to Squad 6 ❤️</p>
      </aside>
    </footer>
  )
}
