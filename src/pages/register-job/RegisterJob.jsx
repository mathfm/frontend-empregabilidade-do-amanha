import axios from "axios";
import FormsJob from "../../components/forms-job/FormsJob";
import styles from "./RegisterJob.module.css";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
export default function RegisterJob() {
  const { reset } = useForm();
  const registerJob = async (data) => {
    const tokenDecode = jwtDecode(localStorage.getItem("token"));
    try {
      await axios.post(`http://localhost:3000/api/job/create/${tokenDecode.id}`, data);
      reset();
      window.location.reload();
    } catch (error) {
      console.log("Error ao tentar registrar uma nova vaga");
    }
  }
  return (
    <div className={styles["page-register"]}>
      <FormsJob functionForms={registerJob} methodForm="Registrar"/>

    </div>
  )
}
