import "../../styles/Portfolio/portfolio.css";
import portfolio1image from "../../assets/portfolio/portfolio-1.jpg";
import portfolio2image from "../../assets/portfolio/portfolio-2.jpg";
import portfolio3image from "../../assets/portfolio/portfolio-3.jpg";
import portfolio4image from "../../assets/portfolio/portfolio-4.jpg";
import portfolio5image from "../../assets/portfolio/portfolio-5.jpg";
import portfolio6image from "../../assets/portfolio/portfolio-6.jpg";
import portfolio7image from "../../assets/portfolio/portfolio-7.jpg";
import portfolio8image from "../../assets/portfolio/portfolio-8.jpg";
import portfolio9image from "../../assets/portfolio/portfolio-9.jpg";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container aos-init" data-aos="fade-up">
                <div className="section-title">
                    <h2>
                        Portfolio
                    </h2>
                    <h3>
                        Check our 
                        <span style={ { marginLeft: "0.5rem" } }>
                            Portfolio
                        </span>
                    </h3>
                    <p>
                        Below is a collection of some of the products that we have created software applications to support and advertise.                    </p>
                </div>
                <div className="row">
                    <div className="d-none d-lg-block col-lg-4 filter-app">
                        <img src={ portfolio1image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio6image } className="img-fluid" alt="Portfolio" />
                    </div>
                    <div className="d-none d-lg-block col-lg-4 filter-app">
                        <img src={ portfolio2image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio5image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio9image } className="img-fluid" alt="Portfolio" />
                    </div>
                    <div className="d-none d-lg-block col-lg-4 filter-app">
                        <img src={ portfolio3image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio4image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio7image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio8image } className="img-fluid" alt="Portfolio" />
                    </div>
                    <div className="col-md-6 d-lg-none filter-app">
                        <img src={ portfolio1image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio4image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio6image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio8image } className="img-fluid" alt="Portfolio" />
                    </div>
                    <div className="col-md-6 d-lg-none filter-app">
                        <img src={ portfolio2image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio3image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio5image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio7image } className="img-fluid" alt="Portfolio" />
                        <img src={ portfolio9image } className="img-fluid" alt="Portfolio" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio