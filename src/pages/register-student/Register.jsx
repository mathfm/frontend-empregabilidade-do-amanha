import { useForm } from "react-hook-form";
import styles from "./Register.module.css";
import { ContainerImg } from "../../components/container-img/ContainerImg";
import { Link } from "react-router-dom";
import axios from "axios";
import FormsUser from "../../components/forms-user/FormsUser";

export default function Register() {

    const { reset } = useForm();

    const createUser = async (data) => {
        try {
            await axios.post("http://localhost:3000/api/student/create", data);
            reset();
            window.location.replace("/login-student");
        } catch (error) {
            console.log("Error ao registrar usuario: ", error);
        }
  }
  
  const returnLink = () => {
      window.location.replace("/");
    }

    return (
      <ContainerImg>
        <section className={styles["register-container"]}>
          <FormsUser functionForms={createUser} methodForm="Criar Conta" linkReturn={returnLink} />
          <Link to={"/register-collaborator"} className={styles["link"]}>
            Quer se registrar como <span>colaborador?</span>
          </Link>
          <Link to={"/login-student"} className={styles["link"]}>
            Ja possui um <span>login?</span>
          </Link>
        </section>
      </ContainerImg>
    );
}
