import "./Home.css";
export const Home = () => {
    return (
      <section className="home-page">
        <div className="text-container">
          <h1>Empregabilidade do Amanhã</h1>
          <p className="text-paragraph">
            <span>&lt;/</span> Uma plataforma feita para mostrar o que os alunos fizeram ao
            longo do curso <span>&gt;</span>
          </p>
          <div className="container-btn-home">
            <a href="#" className="link-home">Saiba mais</a>
            <a href="#" className="link-home login">Fazer login</a>
          </div>
        </div>
      </section>
    );
}