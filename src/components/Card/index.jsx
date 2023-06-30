import { Link } from 'react-router-dom'

function Card({ title, background, id }) {
    return (
        <Link
            to={`/lodging/${id}`}
            style={{ backgroundImage: `url(${background})` }}
            className="home__lodging__card"
            alt={`${title}`}
        >
            {' '}
            <div className="home__lodging__card-gradient"></div>
            <h2 className="home__lodging__card-title">{title}</h2>
        </Link>
    )
}

export default Card
