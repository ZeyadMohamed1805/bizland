import testimonialsbackground from '../../assets/backgrounds/testimonials-bg.jpg';
import testimonials1image from "../../assets/testimonials/testimonials-1.jpg";
import testimonials2image from "../../assets/testimonials/testimonials-2.jpg";
import testimonials3image from "../../assets/testimonials/testimonials-3.jpg";
import testimonials4image from "../../assets/testimonials/testimonials-4.jpg";
import testimonials5image from "../../assets/testimonials/testimonials-5.jpg";
import "../../styles/Testimonials/testimonials.css";

const Testimonials = () => {
    return (
        <section id="testimonials" className="w-100 position-relative" style={{ background: `url( '${ testimonialsbackground }' ) center no-repeat`, backgroundSize: "cover", padding: "80px 0" }}>
            <div className="w-100 h-100 position-absolute top-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}></div>
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators" style={{ transform: "translateY(80px)" }}>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="rounded-circle active" style={{ width: "12px", height: "12px" }} aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="rounded-circle" style={{ width: "12px", height: "12px" }} aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="rounded-circle" style={{ width: "12px", height: "12px" }} aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="rounded-circle" style={{ width: "12px", height: "12px" }} aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="rounded-circle" style={{ width: "12px", height: "12px" }} aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex flex-column align-items-center text-center text-white">
                                <img src={ testimonials1image } className="rounded-circle border border-4" width="100px" alt="Testimonial 1" />
                                <h3 className="h3 fw-bold fs-5 mt-3">
                                    Saul Goodman
                                </h3>
                                <h4 className="h4 fw-semibold fs-6 mb-4">
                                    Ceo &amp; Founder
                                </h4>
                                <div style={{ width: "80%" }}>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                    <span className="fst-italic">
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    </span>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column align-items-center text-center text-white">
                                <img src={ testimonials2image } className="rounded-circle border border-4" width="100px" alt="Testimonial 2" />
                                <h3 className="h3 fw-bold fs-5 mt-3">
                                    Sara Wilsson
                                </h3>
                                <h4 className="h4 fw-semibold fs-6 mb-4">
                                    Designer
                                </h4>
                                <div style={{ width: "80%" }}>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                    <span className="fst-italic">
                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                    </span>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column align-items-center text-center text-white">
                                <img src={ testimonials3image } className="rounded-circle border border-4" width="100px" alt="Testimonial 3" />
                                <h3 className="h3 fw-bold fs-5 mt-3">
                                    Jena Karlis
                                </h3>
                                <h4 className="h4 fw-semibold fs-6 mb-4">
                                    Store Owner
                                </h4>
                                <div style={{ width: "80%" }}>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                    <span className="fst-italic">
                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    </span>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column align-items-center text-center text-white">
                                <img src={ testimonials4image } className="rounded-circle border border-4" width="100px" alt="Testimonial 4" />
                                <h3 className="h3 fw-bold fs-5 mt-3">
                                    Matt Brandon
                                </h3>
                                <h4 className="h4 fw-semibold fs-6 mb-4">
                                    Freelancer
                                </h4>
                                <div style={{ width: "80%" }}>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                    <span className="fst-italic">
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                    </span>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column align-items-center text-center text-white">
                                <img src={ testimonials5image } className="rounded-circle border border-4" width="100px" alt="Testimonial 5" />
                                <h3 className="h3 fw-bold fs-5 mt-3">
                                    John Larson
                                </h3>
                                <h4 className="h4 fw-semibold fs-6 mb-4">
                                    Entrepreneur
                                </h4>
                                <div style={{ width: "80%" }}>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                    <span className="fst-italic">
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                    </span>
                                    <img src="../node_modules/bootstrap-icons/icons/quote.svg" width="26px" alt="Quote" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials