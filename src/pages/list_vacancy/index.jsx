import styles from "./list_vacancy.module.css";

export default function ListVacancy({description_vacancy}) {
    return (
        <>
            <section className={styles["card-page"]}>
                <div className={styles["card-container"]}>
                    <div className={styles["description"]}>
                        <h3 className={styles["description"]}>Uma descrição sobre os requisitos, tecnologias e detalhes de modo geral sobre a vaga que ta sendo compartilhada</h3>
                    </div>
                    <br />
                    <div className="button_acess">
                        <button className={styles["button_acess"]}>Acessar Vaga</button>
                    </div>
                </div>
            </section>
        </>
    )
}