import { useEffect, useState } from "react";
import CardStudent from "../../components/card-student";
import { StudentModel } from "../../models/StudentModel";
import { api } from "../../services/apiService";

export function PageAllStudents() {
    const [allStudent, setAllStudent] = useState<StudentModel[]>();

    useEffect(() => {
        api.get("/student").then((resp) => {
            setAllStudent(resp.data);             
        }).catch((err) => { 
            console.log(err.message);
        });
    }, []);

    return (
        <section className="w-full min-h-screen flex items-start justify-start bg-purple-900 p-4 lg:p-8">
            <div className="flex items-center justify-center 2xl:justify-start flex-wrap gap-2">
                {allStudent !== undefined && allStudent.length > 0 &&  (
                    allStudent.map((student) => 
                        <CardStudent
                            img="/src/assets/img-profile-2.jpg"
                            key={student.id}
                            id={student.id || ""}
                            description={student.description}
                        />
                    )
                )}
                {allStudent !== undefined && allStudent.length === 0 && (
                    <p className="text-white text-3xl">Nenhum estudante encontrado.</p>
                )}
            </div>
        </section>
    )
}
