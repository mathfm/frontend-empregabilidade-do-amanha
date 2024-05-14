import { useEffect, useState } from "react";
import CardJob from "../../components/card-job/CardJob";
import styles from "./PageCollaborator.module.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Implementar a conexão com o banco de dados
export function PageCollaborator() {

    const [collaborator, setCollaborator] = useState({});
    const [links, setLinks] = useState([]);

    useEffect(() => {
        async function loadCollaborator() {
            const tokenDecode = jwtDecode(localStorage.getItem("token"));
            const request = await axios.get(`http://localhost:3000/api/employer/${tokenDecode.id}`);
            const linkRequest = await axios.get(`http://localhost:3000/api/job/${tokenDecode.id}/all`);
            setLinks(linkRequest.data);
            setCollaborator(request.data);
        }
        loadCollaborator();
    }, [])

    
    // const deleteLink = async (id, collaborator_id) => {
    //     await axios.delete(`http://localhost:3000/api/job/delete/${id}/${collaborator_id}`);
    //     window.location.reload();
    // }
    
    // const editLink = async (id) => {
    //     localStorage.setItem("id_job", id);
    //     window.location.href = "/job-edit";
    // }


    return (
        <section className="w-full h-screen flex items-center justify-evenly bg-purple-950">

            <div className="flex flex-col items-center xl:items-start xl:flex-row gap-4 justify-center max-h-svh">
                <section className="w-[450px] h-[300px] bg-purple-800 flex items-center justify-center flex-col gap-5 rounded-md text-white">
                    <figure className={styles["img-perfil"]}>
                        <img src="/src/assets/img-profile-2.jpg" alt="" />
                    </figure>
                    <p>Matheus Silva S</p>
                    <p>email@example.com</p>
                </section>
                <div className="flex flex-col gap-4 overflow-x-hidden overflow-y-auto min-h-96 max-h-[400px] xl:max-h-[700px] scrollbar scrollbar-thumb-purple-900">
                    <CardJob title={"Descrição da vaga"} description={"descrição da vaga descrição da vagadescrição da vagadescrição da vagadescrição da vaga descrição da vagadescrição da vagadescrição da vagadescrição da vaga descrição da vagadescrição da vagadescrição da vagavagadescrição da vaga descrição da vagadescrição da vagadescrição da vaga"} link="example" isCollaborator />
                    <CardJob title={"Descrição da vaga"} description={"descrição da vaga descrição da vagadescrição da vagadescrição da vagadescrição da vaga descrição da vagadescrição da vagadescrição da vagadescrição da vaga descrição da vagadescrição da vagadescrição da vagavagadescrição da vaga descrição da vagadescrição da vagadescrição da vaga"} link="example" isCollaborator />
                    <CardJob title={"Descrição da vaga"} description={"descrição da vaga descrição da vagadescrição da vagadescrição da vagadescrição da vaga descrição da vagadescrição da vagadescrição da vagadescrição da vaga descrição da vagadescrição da vagadescrição da vagavagadescrição da vaga descrição da vagadescrição da vagadescrição da vaga"} link="example" isCollaborator />
                    <CardJob title={"Descrição da vaga"} description={"descrição da vaga descrição da vagadescrição da vagadescrição da vagadescrição da vaga descrição da vagadescrição da vagadescrição da vagadescrição da vaga descrição da vagadescrição da vagadescrição da vagavagadescrição da vaga descrição da vagadescrição da vagadescrição da vaga"} link="example" isCollaborator />
                </div>
            </div>
        </section>
    )
}

/*
                {
                    links.length > 0 && (
                        links.map((link, i) => {
                            return (
                                <div key={i} className={styles["card"]}>
                                    <CardJob title={"link.title"} description={link.description} link={link.link_job}/>
                                    <div className={styles["link-card"]}>
                                        <button className={`${styles["link"]} ${styles["delete"]}`} onClick={() => deleteLink(link.id, collaborator.id)}>Deletar</button>
                                        <button className={styles["link"]} onClick={() => editLink(link.id)}>Editar</button>
                                    </div>
                                </div>
                            )
                        })
                    )
                    || (
                        <div className={styles["card"]}>
                            <p className="text-white text-2xl">Você não possui vagas cadastradas no momento</p>
                        </div>
                    )
                }
*/