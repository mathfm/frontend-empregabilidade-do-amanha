import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Login from "../../components/login/Login";

export default function LoginStudent() {
    const { login } = useContext(AuthContext);

    const loginUser = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/login/student",
                data
            );

            const { token } = response.data;

            if (token) {
                login(token);
                window.location.href = "/perfil-student";
            }
        } catch (error) {
            return "Erro ao tentar fazer login"
        }
    };

    return (
        <Login typeLogin={loginUser} />
    )
}
