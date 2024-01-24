import "../../styles/Pricing/pricing.css";

const Pricing = () => {
    return (
        <section id="pricing" className="pricing">
            <div className="container aos-init" data-aos="fade-up">
                <div className="section-title">
                    <h2>
                        Pricing
                    </h2>
                    <h3>
                        Check our 
                        <span style={ { marginLeft: "0.5rem" } }>
                            Pricing
                        </span>
                    </h3>
                    <p>
                        We are thrilled to present our pricing structure, designed to offer you not just products or services but a valuable investment in your success.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 aos-init" data-aos="fade-up" data-aos-delay="100">
                        <div className="box">
                            <h3>
                                Free
                            </h3>
                            <h4>
                                <sup>
                                    $
                                </sup>
                                0
                                <span>
                                    / month
                                </span>
                            </h4>
                            <ul>
                                <li>
                                    Priority 24/7 support.
                                </li>
                                <li>
                                    Regular performance reviews and optimizations.
                                </li>
                                <li>
                                    Dedicated account manager and priority support.
                                </li>
                                <li className="na">
                                    Advanced security measures and compliance adherence.
                                </li>
                                <li className="na">
                                    Fully customizable access to development services.
                                </li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4 mt-md-0 aos-init" data-aos="fade-up" data-aos-delay="200">
                        <div className="box featured">
                            <h3>
                                Business
                            </h3>
                            <h4>
                                <sup>
                                    $
                                </sup>
                                    19
                                <span>
                                    / month
                                </span>
                            </h4>
                            <ul>
                                <li>
                                    Priority 24/7 support.
                                </li>
                                <li>
                                    Regular performance reviews and optimizations.
                                </li>
                                <li>
                                    Dedicated account manager and priority support.
                                </li>
                                <li>
                                    Advanced security measures and compliance adherence.
                                </li>
                                <li className="na">
                                    Fully customizable access to development services.
                                </li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 aos-init" data-aos="fade-up" data-aos-delay="300">
                        <div className="box">
                            <h3>
                                Developer
                            </h3>
                            <h4>
                                <sup>
                                    $
                                </sup>
                                    29
                                <span> 
                                    / month
                                </span>
                            </h4>
                            <ul>
                                <li>
                                    Priority 24/7 support.
                                </li>
                                <li>
                                    Regular performance reviews and optimizations.
                                </li>
                                <li>
                                    Dedicated account manager and priority support.
                                </li>
                                <li>
                                    Advanced security measures and compliance adherence.
                                </li>
                                <li>
                                    Fully customizable access to development services.
                                </li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 aos-init" data-aos="fade-up" data-aos-delay="400">
                        <div className="box">
                            <span className="advanced">
                                Advanced
                            </span>
                            <h3>
                                Ultimate
                            </h3>
                            <h4>
                                <sup>
                                    $
                                </sup>
                                    49
                                <span>
                                    / month
                                </span>
                            </h4>
                            <ul>
                                <li>
                                    Priority 24/7 support.
                                </li>
                                <li>
                                    Regular performance reviews and optimizations.
                                </li>
                                <li>
                                    Dedicated account manager and priority support.
                                </li>
                                <li>
                                    Advanced security measures and compliance adherence.
                                </li>
                                <li>
                                    Fully customizable access to development services.
                                </li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;