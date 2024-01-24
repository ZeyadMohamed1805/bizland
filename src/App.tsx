import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Counts from "./components/Counts/Counts";
import Clients from "./components/Clients/Clients";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Main />
            <Skills />
            <Counts />
            <Clients />
            <Services />
            <Testimonials />
        </>
    )
}

export default App;