import { useEffect, useState } from "react";
import CardJob from "../../components/card-job";
import { api } from "../../services/apiService";
import { JobModel } from "../../models/JobModel";
export function PageAllJobs() {
  const [job, setJob] = useState<JobModel[]>();

  useEffect(() => {
    api.get("/job/").then((resp) => {
      setJob(resp.data)
    });
  }, []);

  return (
    <section className="w-full min-h-screen flex items-start justify-center bg-purple-950">
      <div className="flex items-center justify-center flex-wrap gap-12 overflow-y-auto">
        {
          job !== undefined ? (
            job.length > 0 ? (
              job.map((job) => (
                <CardJob
                  isCollaborator={false}
                  key={job.id}
                  title={job.title}
                  description={job.description}
                  link={job.link_job}
                />
              ))
            ) : (
              <div className="text-white">
                <h2>Nenhuma vaga encontrada :(</h2>
              </div>
            )
          ) : (
            <div className="text-white">
              <h2>Carregando...</h2>
            </div>
          )
        }
      </div>
    </section>
  );
}
/*
{(job !== null && job.length > 0 &&
          job.map((job) => {
            return (
              <CardJob
                isCollaborator={false}
                key={job.id}
                title={job.title}
                description={job.description}
                link={job.link_job}
              />
            );
          })) || (
          <div className={styles["not-found"]}>
            <h2>Nenhuma vaga encontrada {":("}</h2>
          </div>
        )}
*/
