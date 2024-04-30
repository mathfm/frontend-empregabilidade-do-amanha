import "./style.css";

export default function Card({ src, name_contrating, email_contrating }) {
    return (
        <div className="container">
            <section className="card">
                <div className="content-card">
                    <div className="image-perfil">
                        <img id="image-perfil" src={src} />
                    </div>
                    <div className="name-contrating">
                        <h3 id="name-contrating">{name_contrating}</h3>
                    </div>
                    <div className="email-contrating">
                        <h3 id="name-contrating">{email_contrating}</h3>
                    </div>
                </div>
            </section>
        </div>

    )
}

