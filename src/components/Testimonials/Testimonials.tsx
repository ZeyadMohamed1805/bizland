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
                                        Responsible for steering the strategic direction, growth, and overall success of the company. Plays a pivotal role in shaping the company's vision, fostering a culture of innovation, and building and leading high-performing teams
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
                                        Whether working in graphic design, web design, industrial design, or other creative fields, Sara bring a unique blend of artistic flair and problem-solving skills to their work
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
                                        Owns and operates a retail establishment, overseeing all aspects of the business to ensure its success. Jena's role involves a combination of strategic planning, operational management, and customer service. 
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
                                        Offers his services on a project-by-project basis. Plays a vital role in the technology ecosystem, contributing to the development of diverse software solutions while enjoying the freedom and flexibility that freelance work offers.
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
                                        Combines a passion for technology with a strong entrepreneurial spirit to establish and lead innovative ventures in the IT sector. John  is driven by a vision to create, disrupt, and bring about positive change in the rapidly evolving landscape of technology.
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