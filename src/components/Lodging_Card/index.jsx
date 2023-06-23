import { Link } from 'react-router-dom'

function Card({ title, background, id }) {
    return (
        <Link
            to={`/lodging/${id}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            {title}
        </Link>
    )
}

export default Card
