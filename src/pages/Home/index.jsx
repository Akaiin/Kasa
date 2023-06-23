import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {
    const [lodgingData, setLodgingData] = useState([])
    useEffect(() => {
        fetch('./logements.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setLodgingData(data)
            })
    }, [])
    return (
        <main>
            <Banner />
            <section className="lodging">
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
    )
}

export default Home
