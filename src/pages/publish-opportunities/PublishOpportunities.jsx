import styles from "./PublishOpportunities.module.css";
import { useForm } from "react-hook-form";
export default function PublishOpportunities() {
    const { register, handleSubmit } = useForm();
    const loginUser = (data) => {
      console.log(data);
    };
    return (
      <section className={styles["publish-container"]}>
        <form
          action=""
          method="post"
          className={styles["forms"]}
          onSubmit={handleSubmit(loginUser)}
        >
          <div className={styles["forms-container"]}>
            <label className={styles["label-forms"]}>Titulo da postagem:</label>
            <input
              className={styles["input-geral"]}
              type="text"
              {...register("titulo")}
            />
          </div>
          <div className={styles["forms-container"]}>
            <label className={styles["label-forms"]}>Descrição:</label>
            <textarea
              cols="30"
              rows="10"
              className={styles["description"]}
              {...register("description")}
            ></textarea>
          </div>
          <div className={styles["forms-container"]}>
            <label className={styles["label-forms"]}>Link da vaga:</label>
            <input
              className={styles["input-geral"]}
              type="text"
              {...register("link")}
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
              Publicar
            </button>
          </div>
        </form>
      </section>
    );
}
