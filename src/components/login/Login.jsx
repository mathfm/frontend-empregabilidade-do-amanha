import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
export default function Login() {

    const { register, handleSubmit } = useForm();
    const loginUser = (data) => {
      console.log(data);
    };
    return (
        <section className={styles["container"]}>
            <section className={styles["login-container"]}>
                <form action="" method="post" className={styles["forms"]} onSubmit={handleSubmit(loginUser)}>
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Email:</label>
                        <input className={styles["input-geral"]} type="email" {...register("email")}/>
                    </div>
                    <div className={styles["forms-container"]}>
                        <label className={styles["label-forms"]}>Senha:</label>
                        <input className={styles["input-geral"]} type="password" {...register("password")}/>
                    </div>
                    <div className={styles["btn-container"]}>
                        <button type="button" className={`${styles["btn-forms"]} ${styles["cancel"]}`}>Voltar</button>
                        <button type="submit" className={`${styles["btn-forms"]} ${styles["submit"]}`}>Fazer Login</button>
                    </div>
                </form>
            </section>
        </section>

    );
}
