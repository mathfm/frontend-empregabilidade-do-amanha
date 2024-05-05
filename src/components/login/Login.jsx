
import { useForm } from 'react-hook-form';

import styles from "./Login.module.css"
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { ContainerImg } from "../container-img/ContainerImg";
export default function Login({ typeLogin }) {
    const { register, handleSubmit } = useForm();
    const backhome = () => {
        window.location.replace("/");
    }
    return (
        <ContainerImg>
            <section className={styles["login-container"]}>
                <div className={styles["link-login-container"]}>
                    <p>Fazer login como <Link to={"/login-student"} className={styles["link-login"]}>Estudante</Link> ou <Link to={"/login-collaborator"} className={styles["link-login"]}>Colaborador</Link></p>
                </div>
                <form className={styles["forms"]} onSubmit={handleSubmit(typeLogin)}>
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
                            onClick={backhome}
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

Login.propTypes = {
    typeLogin: PropTypes.func.isRequired,
};