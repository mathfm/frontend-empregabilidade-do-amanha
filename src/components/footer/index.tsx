import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="footer footer-center text-lg p-10 bg-base-200 text-white bg-black/90">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Sobre nós</a>
        <a className="link link-hover">Contato</a>
        <a className="link link-hover">Apoie um aluno</a>
        <a className="link link-hover">Mais sobre a instituição</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a><FaInstagram className="h-6 w-6" /></a>
          <a><FaLinkedin className="h-6 w-6" /></a>
          <a><FaGithub className="h-6 w-6" /></a>
        </div>
      </nav>
      <aside>
        <p>© All coprights reserved to Squad 6 ❤️</p>
      </aside>
    </footer>
  )
}

// export const Footer = () => {
//   return (
//     <footer className={styles["footer"]}>
//       <figure className="img-footer">
//         <img src="/src/assets/logo-site.svg" alt="" />
//       </figure>
//       <div className={styles["group-info"]}>
//         <div className={styles["group-icon"]}>
//           <Link to="#">
//             <FaInstagram className={styles["icon-footer"]} />
//           </Link>
//           <Link to="#">
//             <FaLinkedin className={styles["icon-footer"]} />
//           </Link>
//         </div>
//         <p>© All coprights reserved to Squad 6 ❤️</p>
//       </div>
//       <div className={styles["text-group-info"]}>
//         <h3>Quem somos?</h3>
//         <Link to="#">Sobre</Link>
//         <Link to="#">Contato</Link>
//       </div>
//     </footer>
//   );
// };
