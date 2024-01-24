import "../../styles/Header/header.css";

const Header = () => {

    const onToggle = () => 
    {
        const navbar = document.querySelector('#navbar');
        const menu = document.querySelector("#menu-icon");

        navbar?.classList.toggle('navbar-mobile');
        menu?.classList.toggle('bi-list');
        menu?.classList.toggle('bi-x');
    }

    const onNavLinkClick = () =>
    {
        const menu = document.querySelector('#menu-icon');

        if ( menu?.classList.contains( "bi-x" ) ) 
        { 
            onToggle(); 
        } 
    }

    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo">
                    <a href="index.html">
                        BizLand<span>.</span>
                    </a>
                </h1>
                <nav id="navbar" className="navbar navbar">
                    <ul>
                        <li>
                            <a className="nav-link scrollto active" href="#hero" onClick={ onNavLinkClick }>
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#about" onClick={ onNavLinkClick }>
                                About
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#services" onClick={ onNavLinkClick }>
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#portfolio" onClick={ onNavLinkClick }>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#team" onClick={ onNavLinkClick }>
                                Team
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#contact" onClick={ onNavLinkClick }>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i id="menu-icon" className="bi bi-list mobile-nav-toggle" onClick={ onToggle }></i>
                </nav>
            </div>
        </header>
    )
}

export default Header;