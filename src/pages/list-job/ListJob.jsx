import { useEffect, useState } from "react";
import styles from "./ListJob.module.css";
import axios from "axios";
import CardJob from "../../components/card-job/CardJob";
export default function ListJob() {
    const [job, setJob] = useState([]);

    useEffect(() => {
        async function loadJobs() {
            const request = await axios.get("http://localhost:3000/api/job/")
            setJob(request.data);
        }
        loadJobs();
    }, [])

    return (
        <section className={styles["page-list"]}>
            <div className={styles["link-container"]}>
                {
                    job.length > 0 && (
                        job.map((job) => {
                            return (
                                <CardJob key={job.id} title={job.title} description={job.description} link={job.link_job} />
                            )
                        })
                    )
                    || (
                        <div className={styles["not-found"]}>
                            <h2>Nenhuma vaga encontrada :(</h2>
                        </div>
                    )
                }
            </div>
        </section>
    );
}
