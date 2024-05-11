import { useContext } from "react";
import Login from "../../components/login/Login";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function LoginCollaborator() {
    const { login } = useContext(AuthContext);
    const loginCollaborator = async (data) => {
        try {
            
            const response = await axios.post("http://localhost:3000/api/employer/login", data);
            const { token } = response.data;
            console.log(token);
            console.log(response.data)
            if (token) {
                login(token);
                window.location.href = "/perfil-collaborator";
            }
        } catch (error) {
            return "Erro ao fazer login"
        }

    }
    return (
    <Login typeLogin={loginCollaborator}/>
  )
}
