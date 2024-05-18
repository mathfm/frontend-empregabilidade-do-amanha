import { useEffect, useState } from "react";
import CardJob from "../../components/card-job";
import { jwtDecode } from "jwt-decode";
import { CollaboratorModel } from "../../models/CollaboratorModel";
import { JobModel } from "../../models/JobModel";
import { api } from "../../services/apiService";
import { JwtTokenModel } from "../../models/JwtTokenModel";
import { useNavigate } from "react-router-dom";
import { ModalJob } from "../modal-job";



// Implementar a conexão com o banco de dados
export function PageCollaborator() {
    const [collaborator, setCollaborator] = useState<CollaboratorModel>();
    const [links, setLinks] = useState<JobModel[]>();
    const tokenDecode = jwtDecode<JwtTokenModel>(localStorage.getItem("token") || "");
    const _navigate = useNavigate();
    const [openModalEdit, setOpenModalEdit] = useState(false);

     useEffect(() => {
        async function loadCollaborator() {
            if (tokenDecode.id) {
                const request = await api.get(`/employer/${tokenDecode.id}`);
                const linkRequest = await api.get(`/job/${tokenDecode.id}/all`);
                setLinks(linkRequest.data);
                setCollaborator(request.data);                
            }
        }
        loadCollaborator();
    }, [tokenDecode.id])


    const deleteCard = async (id: string) => {
        await api.delete(`/job/delete/${id}/${tokenDecode.id}`);
        localStorage.removeItem("idJob");
        _navigate(0);
    }
    
    const editCard = async (id: string) => {
        localStorage.removeItem("idJob");
        setOpenModalEdit(!openModalEdit);
        localStorage.setItem("idJob", id);
        
    }


    return (
        <section className="w-full h-screen flex items-center justify-evenly bg-purple-950">

            <ModalJob idCollaborator={tokenDecode.id} isOpenModal={openModalEdit} setIsOpenModal={setOpenModalEdit} />
            <div className="flex flex-col items-center xl:items-start xl:flex-row gap-4 justify-center max-h-svh">
                <section className="md:w-[450px] w-[300px] h-[300px] bg-purple-800 flex items-center justify-center flex-col gap-5 rounded-md text-white">
                    <figure className="w-24">
                        <img className="rounded-full" src="/src/assets/img-profile-2.jpg" alt="foto de perfil colaborador" />
                    </figure>
                    <p>{ collaborator?.name }</p>
                    <p>{collaborator?.email}</p>
                    <p>Total de vagas publicadas: {links?.length}</p>
                </section>
                <div className="flex flex-col gap-4 overflow-x-hidden overflow-y-auto min-h-96 max-h-[400px] xl:max-h-[700px] scrollbar scrollbar-thumb-purple-900">
                    {
                        links?.length != null && links.length && (
                            links.map((link, i) => {
                                return (
                                    <CardJob key={i}
                                        isCollaborator
                                        title={link.title}
                                        description={link.description}
                                        link={link.link_job}
                                        deleteCard={() => deleteCard(link.id)}
                                        editCard={() => editCard(link.id)} />
                                )
                            })
                        )
                        || (
                            <div className="h-[300px] flex justify-center items-center">
                                <p className="text-white text-2xl">Você não possui vagas cadastradas no momento</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}