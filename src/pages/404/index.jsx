import { Link } from 'react-router-dom'
import Header from '../../components/Header'

function Error() {
    return (
        <>
            <Header />
            <main className="error">
                <h2 className="error__title">404</h2>
                <p className="error__subtitle">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to={'/'} className="error__link">
                    Retourner sur la page d'accueil
                </Link>
            </main>
        </>
    )
}

export default Error
