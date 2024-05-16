import { useEffect, useState } from "react";
import { JobModel } from "../../models/JobModel";
import { api } from "../../services/apiService";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface IModalJob {
    idCollaborator: string;
    isOpenModal: boolean;
    setIsOpenModal: (isOpenModal: boolean) => void;
}

export function ModalJob({ setIsOpenModal, isOpenModal, idCollaborator }: IModalJob) {
    const [editJob, setEditJob] = useState<JobModel>();
    const { register, handleSubmit } = useForm<JobModel>();
    const idJob = localStorage.getItem('idJob');
    const _navigate = useNavigate();

    useEffect(() => {
        api.get(`/job/${idJob}`)
            .then((resp) => {
                setEditJob(resp.data);
            })
            .catch(error => error.message)

    }, [idJob])

    const saveEdit = async (data: JobModel) => {
        try {
            localStorage.removeItem('idJob');
            setIsOpenModal(false);
            _navigate(0);
            await api.put(`/job/update/${idJob}/${idCollaborator}`, data);
        } catch (error) {
            console.log(error);
        }
    }
    if (!isOpenModal) {
        return null;
    }

    return (
        <dialog className="modal" open={isOpenModal}>
            <div className="modal-box h-[650px] w-[800px] bg-purple-950 p-6 rounded-lg shadow-2xl border-2">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white" onClick={() => setIsOpenModal(!isOpenModal)}>✕</button>
                <form onSubmit={handleSubmit(saveEdit)} className="flex flex-col items-start gap-4 text-white h-full">
                    <label>Titulo:</label>
                    <input type="text" className="input input-bordered w-full text-black" {...register("title")} defaultValue={editJob?.title} />
                    <label>Descrição:</label>
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg max-w-[465px] min-h-[250px] resize-none text-black w-full" maxLength={200} {...register("description")} required defaultValue={editJob?.description}></textarea>
                    <label>Link da vaga:</label>
                    <input type="text" className="input input-bordered w-full text-black" {...register("link_job")} defaultValue={editJob?.link_job} />
                    <div className="w-full flex justify-center gap-4">
                        <button onClick={() => setIsOpenModal(!isOpenModal)} className="btn bg-red-500 border-red-600 font-bold text-lg text-white hover:bg-red-700 w-24">Cancelar</button>
                        <button type="submit" className="btn bg-yellow-500 border-yellow-600 font-bold text-lg w-24">Salvar</button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}
//className="flex flex-col items-center gap-4 text-white bg-purple-950 p-6 rounded-lg"