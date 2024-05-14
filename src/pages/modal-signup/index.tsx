import { useState } from "react";
import { TypeUser } from "../../components/type-user";
import { useForm } from "react-hook-form";
import { StudentModel } from "../../models/StudentModel";
import { api } from "../../services/apiService";
import { CollaboratorModel } from "../../models/CollaboratorModel";

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
    const { register, handleSubmit } = useForm<FormData>();
    const [user, setUser] = useState<'estudante' | 'colaborador'>('estudante')
    const setType = (type: 'estudante' | 'colaborador') => {
        setUser(type);
    };

    const createStudent = async (student: StudentModel) => {
        await api.post("/student/create", student)
    }

    const createCollaborator = async (collaborator: CollaboratorModel) => {
        try {
            const user = await api.post("/employer/create", collaborator);
            console.log(user);

        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = () => {
        setIsModalSignupOpen(false);
        setIsModalLoginOpen(true);
    }

    const signupUser = async (data: FormData) => {

        if (user === 'estudante') {
            createStudent({
                name: data.name,
                email: data.email,
                password:  data.password,
                description: data.description || "",
                linkedin: data.linkedin || "",
                github: data.github || ""
            });
        }

        if (user === 'colaborador') {
            createCollaborator(data);
        }                
    }

    return (
        <dialog className="modal" open={isOpenSignup}>
            <div className="modal-box min-h-[450px] max-h-[768px] mt-10 flex flex-col justify-evenly gap-5 bg-purple-950">
                <div className="text-white flex justify-start items-center flex-col gap-5">
                    <h3 className="font-bold text-lg">Se registrar como:</h3>
                    <TypeUser typeUser={user} setTypeUser={setType} />
                </div>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(signupUser)}>
                    <label className="input input-bordered flex items-center gap-2">
                        Nome
                        <input type="text" className="grow" {...register("name")} required/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input type="email" className="grow" {...register("email")} required/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Senha
                        <input type="password" className="grow" {...register("password")} required/>
                    </label>
                    {user === "estudante" && (
                        <>
                            <div className="flex items-center justify-center gap-4">
                                <label className="w-56 input input-bordered flex items-center gap-2">
                                    Github
                                    <input type="text" className="grow w-full" placeholder="/username" {...register("github")} required/>
                                </label>
                                <label className="w-56 input input-bordered flex items-center gap-2">
                                    Linkedin
                                    <input type="text" className="grow w-full" placeholder="/in/name" {...register("linkedin")} required/>
                                </label>
                            </div>
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg max-w-[465px] min-h-[220px] resize-none" maxLength={200} {...register("description")} required></textarea>
                        </>
                    )}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white" onClick={() => setIsModalSignupOpen(!isOpenSignup)}>✕</button>
                    <button type="submit" className="btn bg-yellow-500 border-yellow-600 font-bold text-lg">Criar Conta</button>
                </form>
                <button className="text-white underline" onClick={handleLogin}>Ja tem uma conta?</button>
            </div>
        </dialog>
    )
}
