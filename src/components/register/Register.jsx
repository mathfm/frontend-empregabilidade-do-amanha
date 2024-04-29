import { useForm } from "react-hook-form";
import "./Register.css";
export default function Register() {

    const { register, handleSubmit } = useForm();

    const createUser = (data) => {
        console.log(data);
    }

    return (
        <section className="container">
            <section className="register-container">
                <form action="" method="post" className="forms" onSubmit={handleSubmit(createUser)}>
                    <div className="forms-container">
                        <label className="label-forms">Nome:</label>
                        <input className="input-geral" type="text" {...register("name")} />
                    </div>
                    <div className="forms-container">
                        <label className="label-forms">Email:</label>
                        <input className="input-geral" type="email" {...register("email")}/>
                    </div>
                    <div className="forms-container">
                        <label className="label-forms">Senha:</label>
                        <input className="input-geral" type="password" {...register("password")}/>
                    </div>

                    <div className="info-external">
                        <div className="forms-container">
                            <label className="label-forms">Github:</label>
                            <input className="input-short" type="text" {...register("github")}/>
                        </div>
                        <div className="forms-container">
                            <label className="label-forms">Linkedin:</label>
                            <input className="input-short" type="text" {...register("linkedin")}/>
                        </div>
                        <div className="forms-container">
                            <label className="label-forms">Whatsapp:</label>
                            <input className="input-short" type="text" {...register("whatsapp")}/>
                        </div>
                    </div>

                    <div className="forms-container">
                        <label className="label-forms">Descrição:</label>
                        <textarea  className="text-description" cols="30" rows="10" {...register("description")}></textarea>
                    </div>

                    <div className="btn-container">
                        <button type="button" className="btn-forms cancel">Cancelar</button>
                        <button type="submit" className="btn-forms submit">Registrar</button>
                    </div>
                </form>
            </section>
        </section>
    )
}
