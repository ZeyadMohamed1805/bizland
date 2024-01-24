import Features from "../Features/Features";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Counts from "../Counts/Counts";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Portfolio from "../Portfolio/Portfolio";
import Team from "../Team/Team";
import Pricing from "../Pricing/Pricing";
import FAQ from "../FAQ/FAQ";
import Contact from "../Contact/Contact";

const Main = () => {
    return (
        <main id="main">
            <Features />
            <About />
            <Skills />
            <Counts />
            <Clients />
            <Services />
            <Testimonials />
            <Portfolio />
            <Team />
            <Pricing />
            <FAQ />
            <Contact />
        </main>
    )
}

export default Main