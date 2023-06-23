import logo from '../../assets/logo-kasa-white.svg'

function Footer() {
    return (
        <footer className="footer">
            <img
                src={logo}
                alt="logo kasa"
                className="footer__logo-white"
            ></img>
            <p className="footer__copyright">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer
