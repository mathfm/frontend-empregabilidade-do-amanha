import Card from "../../components/Card-contrating";
import "./style.css";
import image from "../../assets/image.png";
import Register_contrating from "../../components/register-contrating";

export default function ContratingEdition() {
    return (
        <>
            <section className="card-contrating">
                <Card src={image} name_contrating="teste" email_contrating="teste@gmail.com" />
            </section>

            <section className="register-contrating">
                <Register_contrating />
            </section>
        </>
    )
}