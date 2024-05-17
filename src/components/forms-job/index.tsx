import { useForm } from "react-hook-form";
import styles from "./FormsJob.module.css";
import { JobModel } from "../../models/JobModel";

interface FormsJobProp {
  functionForms: (data: JobModel) => Promise<void>;
  methodForm: string;
  linkReturn: () => void;
}

export function FormsJob({
  functionForms,
  methodForm,
  linkReturn,
}: FormsJobProp) {
  const { handleSubmit, register } = useForm<JobModel>();
  
  return (
    <form className="flex flex-col items-center gap-4 text-white bg-purple-950 p-6 rounded-lg" onSubmit={handleSubmit(functionForms)}>
      <div className="flex flex-col gap-4">
        <label className={styles["label-forms"]}>Titulo:</label>
        <input
          type="text"
          className="input input-bordered w-[500px] text-black"
          {...register("title")}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className={styles["label-forms"]}>Descrição:</label>
        <textarea
          maxLength={300}
          className="textarea textarea-bordered textarea-lg w-[500px] h-[300px] resize-none text-black"
          cols={30}
          rows={10}
          {...register("description")}
        ></textarea>
      </div>
      <div className="flex flex-col gap-4">
        <label className={styles["label-forms"]}>URL:</label>
        <input
          type="text"
          className="input input-bordered w-[500px] text-black"
          {...register("link_job")}
        />
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="btn w-28 h-7 bg-red-500 text-white hover:bg-red-800"
          onClick={linkReturn}
        >
          Voltar
        </button>
        <button
          type="submit"
          className="btn w-28 h-7 bg-yellow-500 border-yellow-600 hover:text-black"
        >
          {methodForm}
        </button>
      </div>
    </form>
  );
}
