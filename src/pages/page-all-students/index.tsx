import CardStudent from "../../components/card-student";

export function PageAllStudents() {
    return (
        <section className="w-full min-h-screen flex items-start justify-center bg-purple-900">
            <div className="flex items-center flex-wrap gap-12">
                <CardStudent
                    img="/src/assets/img-profile.jpg"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia, repudiandae necessitatibus..."
                    linkPerfil="#"
                />
                <CardStudent
                    img="/src/assets/img-profile.jpg"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia, repudiandae necessitatibus repudiandae necessitatibusrepudiandae necessitatibusrepudiandae necessitatibus...necessitatibus...necessitatibus...necessitatibus...necessitatibus..."
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
