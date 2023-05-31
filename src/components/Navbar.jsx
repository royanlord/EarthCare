import "../css/navbar.css"
import { Dropdown } from "bootstrap"

export const Navbar = () => {
    return (
        <>
            <header>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
                    <div className="container">
                        <a className="navbar-brand text-white" href="index.html">
                            {/* <img src="" className="logo-nav" alt="logo navbar" height="50" /> */}
                            EarthCare
                        </a>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center text-center">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Content
                                    </a>
                                    <ul className="dropdown-menu animate slideIn dropdown-menu-dark">
                                        <li>
                                            <a className="dropdown-item" href="event.html">Event</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="article.html">Article</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="about.html">About</a>
                                </li>
                                <li className="nav-item me-lg-4">
                                    <a className="nav-link active" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="login.html">
                                        <button className="btn btn-primary px-3 border-0" type="submit">Login</button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}