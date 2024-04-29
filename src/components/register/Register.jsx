import { useForm } from "react-hook-form";
import styles from "./Register.module.css";
export default function Register() {

    const { register, handleSubmit } = useForm();

    const createUser = (data) => {
        console.log(data);
    }

    return (
        <section className={styles["container"]}>
            <section className={styles["register-container"]}>
                <form action="" method="post" className={styles["forms"]} onSubmit={handleSubmit(createUser)}>
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Nome:</label>
                        <input className={styles["input-geral"]} type="text" {...register("name")} />
                    </div>
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Email:</label>
                        <input className={styles["input-geral"]} type="email" {...register("email")}/>
                    </div>
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Senha:</label>
                        <input className={styles["input-geral"]} type="password" {...register("password")}/>
                    </div>

                    <div className={styles["info-external"]}>
                        <div className={styles["forms-container"]}>
                            <label className={styles["label-forms"]}>Github:</label>
                            <input className={styles["input-short"]} type="text" {...register("github")}/>
                        </div>
                        <div className={styles["forms-container"]}>
                            <label className={styles["label-forms"]}>Linkedin:</label>
                            <input className={styles["input-short"]} type="text" {...register("linkedin")}/>
                        </div>
                        <div className={styles["forms-container"]}>
                            <label className={styles["label-forms"]}>Whatsapp:</label>
                            <input className={styles["input-short"]} type="text" {...register("whatsapp")}/>
                        </div>
                    </div>

                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Descrição:</label>
                        <textarea  className={styles["text-description"]} cols="30" rows="10" {...register("description")}></textarea>
                    </div>

                    <div className={styles["btn-container"]}>
                        <button type="button" className={`${styles["btn-forms"]} ${styles["cancel"]}`}>Voltar</button>
                        <button type="submit" className={`${styles["btn-forms"]} ${styles["submit"]}`}>Registrar</button>
                    </div>
                </form>
            </section>
        </section>
    )
}
