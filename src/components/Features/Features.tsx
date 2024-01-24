import "../../styles/Features/features.css";

const Features = () => {
    return (
        <section id="featured-services" className="featured-services">
            <div className="container aos-init" data-aos="fade-up">
                <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box aos-init" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-palette" viewBox="0 0 16 16">
                                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7"/>
                                </svg>
                            </div>
                            <h4 className="title">
                                <a href="#">
                                    UI/UX
                                </a>
                            </h4>
                            <p className="description">
                                Our team seamlessly blend aesthetics and functionality, ensuring your digital products provide an exceptional user experience.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box aos-init" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tv" viewBox="0 0 16 16">
                                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
                                </svg>
                            </div>
                            <h4 className="title">
                                <a href="#">
                                    Frontend
                                </a>
                            </h4>
                            <p className="description">
                                Our team are dedicated to crafting responsive, user-friendly interfaces that captivate your audience and elevate your online presence.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box aos-init" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hdd-rack" viewBox="0 0 16 16">
                                <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                                <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-3-4v2H4V7z"/>
                            </svg>
                            </div>
                            <h4 className="title">
                                <a href="#">
                                    Backend
                                </a>
                            </h4>
                            <p className="description">
                                Our team are committed to building robust, scalable, and secure server-side solutions that power seamless digital experiences for your users.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box aos-init" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-recycle" viewBox="0 0 16 16">
                                    <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
                                </svg>
                            </div>
                            <h4 className="title">
                                <a href="#">
                                    Devops
                                </a>
                            </h4>
                            <p className="description">
                                Our team are dedicated to optimizing your software delivery pipeline, enhancing scalability, and ensuring the reliability of your digital infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;