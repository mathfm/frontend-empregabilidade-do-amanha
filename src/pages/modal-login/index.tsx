import { useContext, useState } from "react";
import { TypeUser } from "../../components/type-user";
import { useForm } from "react-hook-form";
import { api } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import toast from "react-hot-toast";



interface IModalLogin {
    isOpenLogin: boolean;
    setIsModalLoginOpen: (isOpenLogin: boolean) => void;
    setIsModalSignupOpen: (isSignup: boolean) => void;
}

interface IUserForm {
    email: string;
    password: string;
}


export function ModalLogin({ isOpenLogin, setIsModalLoginOpen, setIsModalSignupOpen }: IModalLogin) {
    const [user, setUser] = useState<'estudante' | 'colaborador'>('estudante')
    const { register, handleSubmit } = useForm<IUserForm>();
    const _navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const setType = (type: 'estudante' | 'colaborador') => {
        setUser(type);
    };



    const handleSignup = () => {
        setIsModalLoginOpen(false);
        setIsModalSignupOpen(true);
    }

    const loginCollaborator = async (data: IUserForm) => {
        try {
            
            const respCollaborator = await api.post("/employer/login", data);
            const { token } = respCollaborator.data;
            if (token) {
                authContext?.login(token);
                localStorage.setItem("type", "collaborator");
                _navigate("/perfil-collaborator");
            }
            
            
        } catch (error) {
            toast.error("Email ou senha invalido");
        }
    }

    const loginStudent = async (data: IUserForm) => { 
        try {
            
            const respStudent = await api.post("/student/login", data);
            
            const { token } = respStudent.data;
            if (token) {
                authContext?.login(token);
                localStorage.setItem("type", "student");
                _navigate("/perfil-estudante");
            }
        } catch (error) {
            toast.error("Email ou senha invalido");
        }
    }

    if (!isOpenLogin) {
        return null;
    } 


    const handleLoginUser = async (data: IUserForm) => {
        if (user == "estudante") {
            loginStudent(data);
        }
        if (user == "colaborador") {
            loginCollaborator(data);
        }
    }

    return (
        <dialog className="modal" open={isOpenLogin}>
            <div className="modal-box h-[450px] flex flex-col justify-evenly gap-5 bg-purple-950">
                <div className="text-white flex justify-start items-center flex-col gap-5">
                    <h3 className="font-bold text-lg">Deseja fazer login como:</h3>
                    <TypeUser typeUser={user} setTypeUser={setType} />
                </div>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleLoginUser)}>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input type="email" className="grow" {...register('email')} />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Senha
                            <input type="password" className="grow" {...register('password')} />
                        </label>
                    </div>
                    <button type="submit" className="btn bg-yellow-500 border-yellow-600 font-bold text-lg text-black hover:bg-yellow-600">
                        Fazer login
                    </button>
                </form>
                <button className="text-white underline" onClick={handleSignup}>
                    Não tem uma conta?
                </button>
                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
                    onClick={() => setIsModalLoginOpen(!isOpenLogin)}
                >
                    X
                </button>
            </div>
        </dialog>
    )
}
