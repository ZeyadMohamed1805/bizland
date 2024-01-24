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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shop-window" viewBox="0 0 16 16">
                                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                                        <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                        <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
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