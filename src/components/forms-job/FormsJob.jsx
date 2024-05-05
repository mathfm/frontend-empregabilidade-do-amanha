import { useForm } from "react-hook-form";
import styles from "./FormsJob.module.css";
import PropTypes from "prop-types";
export default function FormsJob({ functionForms, methodForm }) {
    const { handleSubmit, register } = useForm();
    return (
        <form
            className={styles["forms"]}
            onSubmit={handleSubmit(functionForms)}
        >
            <div className={styles["forms-container"]}>
                <label className={styles["label-forms"]}>Titulo:</label>
                <input
                    type="text"
                    className={styles["input-geral"]}
                    {...register("title")}
                />
            </div>
            <div className={styles["forms-container"]}>
                <label className={styles["label-forms"]}>Descrição:</label>
                <textarea
                    maxLength={300}
                    className={styles["text-description"]}
                    cols="30"
                    rows="10"
                    {...register("description")}
                ></textarea>
            </div>
            <div className={styles["forms-container"]}>
                <label className={styles["label-forms"]}>URL:</label>
                <input
                    type="text"
                    className={styles["input-geral"]}
                    {...register("link_job")}
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
                    {methodForm}
                </button>
            </div>
        </form>
    );
}

FormsJob.propTypes = {
    functionForms: PropTypes.func.isRequired,
    methodForm: PropTypes.string.isRequired
};