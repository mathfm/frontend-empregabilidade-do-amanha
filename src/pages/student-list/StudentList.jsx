import CardStudent from "../../components/card-student/CardStudent";
import styles from "./StudentList.module.css";

export default function StudentList() {
    return (
        <section className={styles["card-page"]}>
            <div className={styles["card-container"]}>
                <CardStudent
                    img="/src/assets/img-profile.jpg"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia, repudiandae necessitatibus..."
                    linkPerfil="#"
                />
                <CardStudent
                    img="/src/assets/img-profile.jpg"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia, repudiandae necessitatibus..."
                    linkPerfil="#"
                />
                <CardStudent
                    img="/src/assets/img-profile.jpg"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia, repudiandae necessitatibus..."
                    linkPerfil="#"
                />
            </div>
        </section>
    )
}
