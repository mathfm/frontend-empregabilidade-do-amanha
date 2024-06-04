import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-empregabilidade-do-amanha.onrender.com"
})

