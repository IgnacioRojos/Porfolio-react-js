import './header.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true' ? true : false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <header className="header container-fluid">
            <nav className="navbar navbar-expand-lg">
                <a href="#ir" className="navbar-brand nombre" id="ir">
                    <h1>IR</h1>
                </a>

                <button
                    className="navbar-toggler botonMenu"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#sobreMi">Sobre Mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#proyectos">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                    <button className="btn btn-theme-toggle ms-3" onClick={toggleDarkMode}>
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;