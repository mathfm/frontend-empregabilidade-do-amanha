import { useForm } from "react-hook-form";
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
    <form className="flex flex-col items-center gap-12 bg-purple-950 p-6 rounded-lg w-[450px]" onSubmit={handleSubmit(functionForms)}>

      <label className="input input-bordered flex items-center gap-2 w-full">
        Titulo
        <input type="text" className="grow" {...register("title")} />
      </label>
        <textarea placeholder="Descrição" className="textarea textarea-bordered textarea-lg w-full h-[260px] resize-none" maxLength={250} {...register("description")} required></textarea>
      <label className="bg-white input input-bordered flex items-center gap-2 w-full">
        Link
        <input type="text" className="grow" {...register("link_job")} />
      </label>
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
          className="btn w-28 h-7 text-black hover:bg-yellow-600 bg-yellow-500 border-yellow-600 hover:text-black"
        >
          {methodForm}
        </button>
      </div>
    </form>
  );
}
