import "../../styles/Header/header.css";

const Header = () => {
    
    const onDropOne = ( event : React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => 
    {
        const navbar = document.querySelector('#navbar');
        const dropdown = document.querySelector("#dropdown-link");

        if ( dropdown && navbar?.classList.contains('navbar-mobile') )
        {
            event.preventDefault();
            dropdown?.nextElementSibling?.classList.toggle('dropdown-active');
        }
    }

    const onDropTwo = ( event : React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => 
    {
        const navbar = document.querySelector('#navbar');
        const dropdown = document.querySelector("#dropdown-active-link");

        if ( navbar?.classList.contains('navbar-mobile') ) 
        {
            event.preventDefault();
            dropdown?.nextElementSibling?.classList.toggle('dropdown-active');
        }
    }

    const onToggle = () => 
    {
        const navbar = document.querySelector('#navbar');
        const menu = document.querySelector("#menu-icon");

        navbar?.classList.toggle('navbar-mobile');
        menu?.classList.toggle('bi-list');
        menu?.classList.toggle('bi-x');
          
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
                            <a className="nav-link scrollto active" href="#hero">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#team">
                                Team
                            </a>
                        </li>
                        <li className="dropdown">
                            <a id="dropdown-link" href="#" onClick={ ( event ) => onDropOne(event) }><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li>
                                    <a href="#">
                                        Drop Down 1
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a id="dropdown-active-link" href="#" onClick={ ( event ) => onDropTwo( event ) }>
                                        <span>
                                            Deep Drop Down
                                        </span>
                                        <i className="bi bi-chevron-right"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Deep Drop Down 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Deep Drop Down 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Deep Drop Down 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Deep Drop Down 4
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Deep Drop Down 5
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        Drop Down 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Drop Down 3
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Drop Down 4
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#contact">
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