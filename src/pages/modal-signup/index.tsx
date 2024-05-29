import { useState } from "react";
import { TypeUser } from "../../components/type-user";
import { useForm } from "react-hook-form";
import { api } from "../../services/apiService";
import { CollaboratorModel } from "../../models/CollaboratorModel";
import toast from "react-hot-toast";

interface IModalSignup {
    isOpenSignup: boolean;
    setIsModalSignupOpen: (isOpenSignup: boolean) => void;
    setIsModalLoginOpen: (isOpenLogin: boolean) => void;
}

interface FormData {
    name: string;
    email: string;
    password: string;
    description?: string;
    linkedin?: string;
    github?: string;
}

export function ModalSignup({ isOpenSignup, setIsModalSignupOpen, setIsModalLoginOpen }: IModalSignup) {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [user, setUser] = useState<'estudante' | 'colaborador'>('estudante')
    const setType = (type: 'estudante' | 'colaborador') => {
        setUser(type);
    };

    const handleLogin = () => {
        setIsModalSignupOpen(false);
        setIsModalLoginOpen(true);
    }

    const signupUser = (data: FormData) => {
        if (user === 'estudante') {
            api.post("/student/create", {
                name: data.name,
                email: data.email,
                password:  data.password,
                description: data.description,
                linkedin_url: data.linkedin || "",
                github_url: data.github || "",
            })
                .then(() => {
                    toast.success("Cadastro realizado com sucesso!");
                    reset();
                }).catch((err) => {
                    if (err.response && err.response.status === 400 && err.response.data.errors) {
                        const { data } = err.response;
                        const { errors } = data;
                        toast.error(errors[0].error);
                    } else {
                        toast.error(err.response.data.error);
                    }
                });
        }

        if (user === 'colaborador') {
            api.post("/employer/create", data as CollaboratorModel)
                .then(() => {
                    toast.success("Cadastro realizado com sucesso!");
                    reset();
                })
                .catch((err) => {
                    if (err.response && err.response.status === 400 && err.response.data.errors) {
                        const { data } = err.response;
                        const { errors } = data;
                        toast.error(errors[0].error);
                    } else {
                        toast.error(err.response.data.error);
                    }
                });
        }
    }

    return (
        <dialog className="modal" open={isOpenSignup}>
            <div className="modal-box mt-10 flex flex-col justify-between gap-5 bg-purple-950 min-h-[450px] md:max-h-[80vh] lg:max-h-[90vh] overflow-auto">
                <div className="text-white flex justify-start items-center flex-col gap-5">
                    <h3 className="font-bold text-lg">Se registrar como:</h3>
                    <TypeUser typeUser={user} setTypeUser={setType} />
                </div>
                <form className="flex flex-col gap-5 px-4 md:px-8 lg:px-12" onSubmit={handleSubmit(signupUser)}>
                    <label className="input input-bordered flex items-center gap-2 bg-black-600">
                        Nome
                        <input type="text" className="grow" {...register("name")} required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-black-600">
                        Email
                        <input type="email" className="grow" {...register("email")} required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-black-600">
                        Senha
                        <input type="password" className="grow" {...register("password")} required />
                    </label>
                    {user === "estudante" && (
                        <>
                            <div className="flex flex-col md:flex-row gap-4">
                                <label className="input input-bordered flex items-center gap-2 md:w-1/2 bg-black-600">
                                    Github
                                    <input type="text" className="grow w-full" placeholder="/username" {...register("github")} required />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 md:w-1/2 bg-black-600">
                                    Linkedin
                                    <input type="text" className="grow w-full" placeholder="/in/name" {...register("linkedin")} required />
                                </label>
                            </div>
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg resize-none bg-black-600" maxLength={200} {...register("description")} required></textarea>
                        </>
                    )}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white" onClick={() => setIsModalSignupOpen(!isOpenSignup)}>✕</button>
                    <button type="submit" className="btn bg-yellow-500 border-yellow-600 font-bold text-lg text-black hover:bg-white">Criar Conta</button>
                </form>
                <button className="text-white underline" onClick={handleLogin}>Já tem uma conta?</button>
            </div>
        </dialog>
    )
}
