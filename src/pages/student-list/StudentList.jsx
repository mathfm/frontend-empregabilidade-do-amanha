import { useEffect, useState } from "react";
import CardStudent from "../../components/card-student/CardStudent";
import styles from "./StudentList.module.css";
import axios from "axios";

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/student");
                setStudents(response.data);
            } catch (error) {
                console.error("Erro ao carregar os estudantes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    return (
        <section className={styles["card-page"]}>
            <div className={styles["card-container"]}>
                {loading ? (
                    <div className={styles["loading"]}>Carregando...</div>
                ) : students.length > 0 ? (
                    students.map((student) => (
                        <CardStudent
                            key={student.id}
                            img={student.github_url} 
                            description={student.description}
                            linkGithub={student.github_url} 
                            linkLinkedin={student.linkedin_url} 
                        />
                    ))
                ) : (
                    <div className={styles["not-found"]}>
                        <h2>Nenhum estudante encontrado :(</h2>
                    </div>
                )}
            </div>
        </section>
    );
};

export default StudentList;
