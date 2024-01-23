import "../../styles/Hero/hero.css";

const Hero = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
                <h1>
                    Welcome to 
                    <span style={{ marginLeft: "0.5rem" }}>
                        BizLand
                    </span>
                </h1>
                <h2>
                    We are team of talented designers making websites with Bootstrap
                </h2>
                <div className="d-flex">
                    <a href="#about" className="btn-get-started scrollto">
                        Get Started
                    </a>
                    <a href="#" className="glightbox btn-watch-video">
                        <i className="bi bi-play-circle"></i>
                        <span>
                            Watch Video
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;