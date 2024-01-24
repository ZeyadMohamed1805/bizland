import "../../styles/Clients/clients.css";
import client1image from "../../assets/clients/client-1.png";
import client2image from "../../assets/clients/client-2.png";
import client3image from "../../assets/clients/client-3.png";
import client4image from "../../assets/clients/client-4.png";
import client5image from "../../assets/clients/client-5.png";
import client6image from "../../assets/clients/client-6.png";

const Clients = () => {
    return (
        <section id="clients" className="clients section-bg">
            <div className="container aos-init" data-aos="zoom-in">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={ client1image } className="img-fluid" alt="Image" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={ client2image } className="img-fluid" alt="Image" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={ client3image } className="img-fluid" alt="Image" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={ client4image } className="img-fluid" alt="Image" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={ client5image } className="img-fluid" alt="Image" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={ client6image } className="img-fluid" alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;