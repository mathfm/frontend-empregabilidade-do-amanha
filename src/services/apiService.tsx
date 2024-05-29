import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3306/api"
})

