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
        <section className="w-full h-screen flex items-start bg-purple-900">
            <div className="flex mt-2 ml-2 items-center flex-wrap gap-12 lg:justify-start justify-center">
                {allStudent !== undefined && allStudent.length >= 0 &&  (
                    allStudent.map((student) => 
                        <CardStudent
                            key={student.id}
                            id={student.id || ""}
                            description={student.description}
                        />
                    )
                )}
            </div>
        </section>
    )
}
