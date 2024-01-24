import "../../styles/About/about.css";
import aboutimage from "../../assets/about/about.jpg";

const About = () => {
    return (
        <section id="about" className="about section-bg">
            <div className="container aos-init" data-aos="fade-up">
                <div className="section-title">
                    <h2>
                        About
                    </h2>
                    <h3>
                        Find Out More 
                        <span style={ { marginLeft: "0.5rem" } }>
                            About Us
                        </span>
                    </h3>
                    <p>
                        Welcome to the heart and soul of our digital endeavors. Here's a glimpse into the collective expertise and spirit that defines us
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6 aos-init" data-aos="fade-right" data-aos-delay="100">
                        <img src={ aboutimage } className="img-fluid" alt="About" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init" data-aos="fade-up" data-aos-delay="100">
                        <h3>
                            At the core of our Developers Team is to craft digital experiences that inspire, empower, and transform.
                        </h3>
                        <p className="fst-italic">
                            We thrive on the challenges of translating ideas into code, solving complex problems, and pushing the boundaries of what's possible in the digital realm.
                        </p>
                        <ul>
                            <li>
                                <div className="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-1-circle" viewBox="0 0 16 16">
                                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h5>
                                        Prioritize user satisfaction and experience.
                                    </h5>
                                    <p>
                                        Gather and incorporate user feedback into development cycles.
                                        Implement features and improvements that directly address user needs
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                                    </svg>
                                </div>
                                <div>
                                    <h5>
                                        Deliver code of the highest quality and reliability.
                                    </h5>
                                    <p>
                                        Implement rigorous testing procedures, including unit tests and automated testing.
                                        Conduct regular code reviews to maintain high coding standards.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p>
                        Behind every line of code is a story, and our team is a collection of diverse individuals with unique stories to tell. Get to know our developers – the thinkers, the problem-solvers, the innovators who are passionate about pushing the boundaries of what technology can achieve.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;