import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Tag from '../../components/Tag'
import Collapsible from '../../components/Collapsible'
import Carousel from '../../components/Carousel'
import Rating from '../../components/Rating'
import Header from '../../components/Header'

function Lodging() {
    const { id } = useParams()
    const [lodging, setLodging] = useState({})
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
    const [errorId, setErrorId] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('../../logements.json')
            .then((response) => response.json())
            .then((data) => {
                const foundLodging = data.find((lodging) => lodging.id === id)
                if (foundLodging === undefined) {
                    setErrorId(true)
                } else {
                    setLodging(foundLodging)
                    setLoad(true)
                }
            })
            .catch((error) => {
                setError(true)
            })
    }, [])
    useEffect(() => {
        if (errorId) {
            navigate('/404')
        }
    }, [errorId])
    return (
        load && (
            <>
                {' '}
                <Header />
                {error ? (
                    <div>Erreur lors de la réception des données</div>
                ) : (
                    <main className="lodging">
                        <Carousel images={lodging.pictures} />
                        <section>
                            <div className="lodging__desktop">
                                <div>
                                    <h2 className="lodging__title">
                                        {lodging.title}
                                    </h2>
                                    <p className="lodging__location">
                                        {lodging.location}
                                    </p>
                                    <div className="lodging__tags-container">
                                        {lodging.tags &&
                                            lodging.tags.map((tag) => (
                                                <Tag key={tag} name={tag} />
                                            ))}
                                    </div>
                                </div>
                                <div className="lodging__flex">
                                    <div className="lodging__host">
                                        <p className="lodging__host__name">
                                            {lodging.host && lodging.host.name}
                                        </p>
                                        <img
                                            src={
                                                lodging.host &&
                                                lodging.host.picture
                                            }
                                            alt={
                                                lodging.host &&
                                                lodging.host.name
                                            }
                                            className="lodging__host__img"
                                        ></img>
                                    </div>
                                    <Rating rate={lodging.rating} />
                                </div>
                            </div>
                            <div className="lodging__collapsibles-container">
                                <div className="lodging__collapsible-left">
                                    <Collapsible title="Description">
                                        <p>{lodging.description}</p>
                                    </Collapsible>
                                </div>
                                <div className="lodging__collapsible-right">
                                    <Collapsible title="Équipements">
                                        <ul>
                                            {lodging.equipments &&
                                                lodging.equipments.map(
                                                    (equipment) => (
                                                        <li key={equipment}>
                                                            {equipment}
                                                        </li>
                                                    )
                                                )}
                                        </ul>
                                    </Collapsible>
                                </div>
                            </div>
                        </section>
                    </main>
                )}
            </>
        )
    )
}

export default Lodging
