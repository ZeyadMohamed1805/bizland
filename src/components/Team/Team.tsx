import "../../styles/Team/team.css";
import team1image from "../../assets/team/team-1.jpg";
import team2image from "../../assets/team/team-2.jpg";
import team3image from "../../assets/team/team-3.jpg";
import team4image from "../../assets/team/team-4.jpg";

const Team = () => {
    return (
        <section id="team" className="team section-bg">
            <div className="container aos-init" data-aos="fade-up">
                <div className="section-title">
                    <h2>
                        Team
                    </h2>
                    <h3>
                        Our Hardworking 
                        <span style={ { marginLeft: "0.5rem" } }>
                            Team
                        </span>
                    </h3>
                    <p>
                        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <div className="member-img">
                                <img src={ team1image } className="img-fluid" alt="Image" />
                                <div className="social">
                                    <a href="#">
                                        <i className="bi bi-twitter"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-linkedin"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>
                                    Walter White
                                </h4>
                                <span>
                                    Chief Executive Officer
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init" data-aos="fade-up" data-aos-delay="200">
                        <div className="member">
                            <div className="member-img">
                                <img src={ team2image } className="img-fluid" alt="Image" />
                                <div className="social">
                                    <a href="#">
                                        <i className="bi bi-twitter"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-linkedin"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>
                                    Sarah Johnson
                                </h4>
                                <span>
                                    Product Manager
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init" data-aos="fade-up" data-aos-delay="300">
                        <div className="member">
                            <div className="member-img">
                                <img src={ team3image } className="img-fluid" alt="Image" />
                                <div className="social">
                                    <a href="#">
                                        <i className="bi bi-twitter"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-linkedin"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>
                                    William Anderson
                                </h4>
                                <span>
                                    CTO
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init" data-aos="fade-up" data-aos-delay="400">
                        <div className="member">
                            <div className="member-img">
                                <img src={ team4image } className="img-fluid" alt="Image" />
                                <div className="social">
                                    <a href="#">
                                        <i className="bi bi-twitter"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-linkedin"></i>
                                        <span>
                                            #
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>
                                    Amanda Jepson
                                </h4>
                                <span>
                                    Accountant
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team