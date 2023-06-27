import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Tag from '../../components/Tag'
import Collapsible from '../../components/Collapsible'
import Carousel from '../../components/Carousel'
import Rating from '../../components/Rating'

function Lodging() {
    const { id } = useParams()
    const [lodging, setLodging] = useState({})
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch('../../logements.json')
            .then((response) => response.json())
            .then((data) => {
                setLodging(data.find((lodging) => lodging.id === id))
            })
            .finally(() => {
                setLoad(true)
            })
    }, [])
    console.log(lodging)
    return (
        load && (
            <main className="lodging">
                <Carousel images={lodging.pictures} />
                <section>
                    <div>
                        <h2>{lodging.title}</h2>
                        <p>{lodging.location}</p>
                        <div>
                            {lodging.tags.map((tag) => (
                                <Tag key={tag} name={tag} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{lodging.host.name}</p>
                            <img src={lodging.host.picture}></img>
                        </div>
                        <div>
                            <Rating rate={lodging.rating} />
                        </div>
                    </div>
                    <div>
                        <Collapsible title="Description">
                            <p>{lodging.description}</p>
                        </Collapsible>
                        <div>
                            <Collapsible title="Équipements">
                                <ul>
                                    {lodging.equipments.map((equipment) => (
                                        <li key={equipment}>{equipment}</li>
                                    ))}
                                </ul>
                            </Collapsible>
                        </div>
                    </div>
                </section>
            </main>
        )
    )
}

export default Lodging
