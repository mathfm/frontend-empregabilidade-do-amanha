import { useEffect, useState } from "react";
import styles from "./ListJob.module.css";
import axios from "axios";
import CardJob from "../../components/card-job/CardJob";

const ListJob = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/job/");
                setJobs(response.data);
            } catch (error) {
                console.error("Erro ao carregar as vagas:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchJobs();
    }, []);

    return (
        <section className={styles["page-list"]}>
            {loading ? (
                <div className={styles["loading"]}>Carregando...</div>
            ) : jobs.length > 0 ? (
                <div className={styles["link-container"]}>
                    {jobs.map((job) => (
                        <CardJob key={job.id} title={job.title} description={job.description} link={job.link_job} />
                    ))}
                </div>
            ) : (
                <div className={styles["not-found"]}>
                    <h2>Nenhuma vaga encontrada :(</h2>
                </div>
            )}
        </section>
    );
};

export default ListJob;
