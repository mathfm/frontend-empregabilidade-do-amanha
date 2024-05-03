import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { ContainerImg } from "../../components/container-img/ContainerImg";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../hooks/AuthContext";
import { useContext } from "react";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const { login } = useContext(AuthContext); // Adicione isLoggedIn ao useContext

    const loginUser = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/login/student",
                data
            );
            
            const { token } = response.data;

            // Efetuar o login apenas se o token estiver presente
            if (token) {
                login(token);
                window.location.href = "/perfil-student";
            }
        } catch (error) {
            return "Erro ao tentar fazer login"
        }
    };

    return (
        <ContainerImg>
            <section className={styles["login-container"]}>
                <form className={styles["forms"]} onSubmit={handleSubmit(loginUser)}>
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
                            Fazer Login
                        </button>
                    </div>
                </form>
                <p className={styles["msg-login"]}>
                    Ainda não possui conta? deseja se registrar como
                    <Link to={"/register-student"} className={styles["link"]}>
                        {" "}
                        estudante
                    </Link>{" "}
                    ou
                    <Link to={"/register-collaborator"} className={styles["link"]}>
                        {" "}
                        colaborador
                    </Link>
                    ?
                </p>
            </section>
        </ContainerImg>
    );
}
