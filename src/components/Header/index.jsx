import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Header() {
    return (
        <header>
            <img src={logo} alt="logo kasa"></img>
            <nav>
                <Link to={'/'}>Accueil</Link>
                <Link to={'/about'}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header
