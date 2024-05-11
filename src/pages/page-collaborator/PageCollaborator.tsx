import { useEffect, useState } from "react";
import CardJob from "../../components/card-job/CardJob";
import styles from "./PageCollaborator.module.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Implementar a conexão com o banco de dados
export default function PageCollaborator() {

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

    
    const deleteLink = async (id, collaborator_id) => {
        await axios.delete(`http://localhost:3000/api/job/delete/${id}/${collaborator_id}`);
        window.location.reload();
    }
    
    const editLink = async (id) => {
        localStorage.setItem("id_job", id);
        window.location.href = "/job-edit";
    }


    return (
        <section className={styles["page-edit"]}>

            <section className={styles["perfil"]}>
                <figure className={styles["img-perfil"]}>
                    <img src="/src/assets/img-profile-2.jpg" alt="" />
                </figure>
                <p>{collaborator.name}</p>
                <p>{collaborator.email}</p>
            </section>

            <div className={styles["list-card"]}>
                {
                    links.length > 0 && (
                        links.map((link) => {
                            return (
                                <div key={link.id} className={styles["card"]}>
                                    <CardJob title={link.title} description={link.description} link={link.link_job}/>
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
                            <p>Você não possui vagas cadastradas</p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
