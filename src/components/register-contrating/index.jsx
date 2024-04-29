import "./style.css";

export default function Register_contrating() {
    return (
        <>
            <section className="form-register">
                <div className="content-register">
                    <form>
                        <label>Nome:</label> <br />
                        <input type="text" placeholder="Digite o seu nome"/> <br />
                        <br />
                        <label>E-mail:</label> <br />
                        <input type="text" placeholder="Digite o seu e-mail"/> <br />
                        <br />
                        <label>Senha:</label> <br />
                        <input type="password" placeholder="Digite a sua senha"/> <br />
                        <br />
                        <button>Salvar</button>
                        <button>Cancelar</button> <br />
                        <button>Deletar conta</button>
                    </form>
                </div>
            </section>
        </>
    )
}