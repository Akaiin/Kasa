import { Link } from 'react-router-dom'

function Card({ title, background, id }) {
    return (
        <Link
            to={`/lodging/${id}`}
            style={{ backgroundImage: `url(${background})` }}
            className="lodging__card"
            alt={`${title}`}
        >
            {' '}
            <div className="lodging__card__gradient"></div>
            <h2 className="lodging__card__title">{title}</h2>
        </Link>
    )
}

export default Card
