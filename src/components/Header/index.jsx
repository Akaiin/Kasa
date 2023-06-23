import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Header() {
    return (
        <header className="header">
            <h1>
                <img src={logo} alt="logo kasa" className="header__logo"></img>
            </h1>
            <nav className="header__nav">
                <Link to={'/'} className="header__link">
                    Accueil
                </Link>
                <Link to={'/about'} className="header__link">
                    A Propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
