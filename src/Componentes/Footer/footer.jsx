import './footer.css';

const Footer = () => {
    return (
        <footer className="footer text-center py-3">
            <p className="footer-copy mb-2">© 2025 Ignacio Rojos</p>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/ignaciorojos" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className="footer-separator">·</span>
                <a href="https://github.com/IgnacioRojos" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span className="footer-separator">·</span>
                <a href="mailto:nachorojos99@gmail.com">Email</a>
            </div>
        </footer>
    );
};

export default Footer;