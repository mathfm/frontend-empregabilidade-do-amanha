import { useForm } from "react-hook-form";
import { ContainerImg } from "../../components/container-img/ContainerImg";
import styles from "./CollaboratoRegister.module.css";
import { Link } from "react-router-dom";
export default function CollaboratorRegister() {
    const { register, handleSubmit } = useForm();

    const createUser = (data) => {
        console.log(data);
    };

    return (
        <ContainerImg>
            <section className={styles["register-container"]}>
                <form
                    action=""
                    method="post"
                    className={styles["forms"]}
                    onSubmit={handleSubmit(createUser)}
                >
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Nome:</label>
                        <input
                            className={styles["input-geral"]}
                            type="text"
                            {...register("name")}
                        />
                    </div>
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Email:</label>
                        <input
                            className={styles["input-geral"]}
                            type="email"
                            {...register("email")}
                        />
                    </div>
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Senha:</label>
                        <input
                            className={styles["input-geral"]}
                            type="password"
                            {...register("password")}
                        />
                    </div>
                    <div className={styles["btn-container"]}>
                        <button
                            type="button"
                            className={`${styles["btn-forms"]} ${styles["cancel"]}`}
                        >
                            Voltar
                        </button>
                        <button
                            type="submit"
                            className={`${styles["btn-forms"]} ${styles["submit"]}`}
                        >
                            Registrar
                        </button>
                    </div>
                    <Link to={"/register-student"} className={styles["link"]}>Quer se registrar como um estudante?</Link>
                    <Link to={"/login"} className={styles["link"]}>Ja possui um login?</Link>
                </form>
            </section>
        </ContainerImg>
    );
}
