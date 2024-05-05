import { useForm } from "react-hook-form";
import { ContainerImg } from "../../components/container-img/ContainerImg";
import styles from "./CollaboratoRegister.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default function CollaboratorRegister() {
    const { register, handleSubmit, reset } = useForm();

    const createUser = async (data) => {
        try {
            const collaborator = await axios.post("http://localhost:3000/api/employer/create", data);
            reset();
            console.log(collaborator);
            window.location.replace("/login-collaborator");
        } catch (error) {
            console.log("Error ao registrar colaborador: ", error);
        }
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
                            required
                        />
                    </div>
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Email:</label>
                        <input
                            className={styles["input-geral"]}
                            type="email"
                            {...register("email")}
                            required
                        />
                    </div>
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Senha:</label>
                        <input
                            className={styles["input-geral"]}
                            type="password"
                            {...register("password")}
                            required
                            min={8}
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
                    <Link to={"/login-collaborator"} className={styles["link"]}>Ja possui um login?</Link>
                </form>
            </section>
        </ContainerImg>
    );
}
