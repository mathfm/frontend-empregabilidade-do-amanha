import { useForm } from "react-hook-form";
import styles from "./RegisterCollaborator.module.css";
import axios from "axios";
import { ContainerImg } from "../../components/container-img/ContainerImg";
import FormsCollaborator from "../../components/forms-collaborator/FormsCollaborator";
import { Link } from "react-router-dom";
export default function RegisterCollaborator() {
    const { reset } = useForm();

    const createUser = async (data) => {
        try {
            await axios.post(
                "http://localhost:3000/api/employer/create",
                data
            );
            reset();
            window.location.replace("/login-collaborator");
        } catch (error) {
            console.log("Error ao registrar colaborador: ", error);
        }
    };
    return (
        <ContainerImg>
            <section className={styles["page-edit"]}>
                <FormsCollaborator functionForms={createUser} methodPost="Registrar" />
                <Link to={"/register-student"} className={styles["link"]}>
                Quer se registrar como um estudante?
                </Link>
                <Link to={"/login-collaborator"} className={styles["link"]}>
                Ja possui um login?
                </Link>
            </section>
      </ContainerImg>
    );
}
