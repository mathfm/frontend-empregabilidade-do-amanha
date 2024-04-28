import "./Header.css";
export const Header = () => {
    return (
        <header className="header">
            <figure className="img-logo-header">
                <img src="/src/assets/logo-site.svg" alt="" />
            </figure>
            <nav className="nav-link-header">
                <a href="#" className="link-header">Home</a>
                <a href="#" className="link-header">Sobre</a>
                <a href="#" className="link-header">Cadastre-se</a>
                <a href="#" className="link-header">Login</a>
            </nav>
        </header>
    )
}

