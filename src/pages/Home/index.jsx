import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../../components/Header'

function Home() {
    const [lodgingData, setLodgingData] = useState([])
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('./logements.json')
            .then((response) => response.json())
            .then((data) => {
                setLodgingData(data)
            })
            .catch((error) => {
                setError(true)
            })
            .finally(() => {
                setLoad(true)
            })
    }, [])
    return (
        load && (
            <>
                {' '}
                <Header location={'home'} />{' '}
                {error ? (
                    <div>Erreur lors de la réception des données</div>
                ) : (
                    <main>
                        <Banner />
                        <section className="home__lodging">
                            {lodgingData.map((lodging) => (
                                <Card
                                    key={lodging.id}
                                    title={lodging.title}
                                    background={lodging.cover}
                                    id={lodging.id}
                                />
                            ))}
                        </section>
                    </main>
                )}
            </>
        )
    )
}

export default Home
