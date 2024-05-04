import { useForm } from "react-hook-form";
import styles from "./FormsUser.module.css";
import PropTypes from "prop-types";


export default function FormsUser({functionForms, methodForm}) {
    const { register, handleSubmit } = useForm();
    
  return (
    <form
      action=""
      method="post"
      className={styles["forms"]}
      onSubmit={handleSubmit(functionForms)}
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

      <div className={styles["info-external"]}>
        <div className={styles["forms-container"]}>
          <label className={styles["label-forms"]}>Github:</label>
          <input
            className={styles["input-short"]}
            type="text"
            {...register("github_url")}
          />
        </div>
        <div className={styles["forms-container"]}>
          <label className={styles["label-forms"]}>Linkedin:</label>
          <input
            className={styles["input-short"]}
            type="text"
            {...register("linkedin_url")}
          />
        </div>
      </div>

      <div className={styles["forms-container"]}>
        <label className={styles["label-forms"]}>Descrição:</label>
        <textarea
          className={styles["text-description"]}
          cols="30"
          rows="10"
          {...register("description")}
        ></textarea>
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

FormsUser.propTypes = {
    functionForms: PropTypes.func.isRequired,
    methodForm: PropTypes.string.isRequired
};