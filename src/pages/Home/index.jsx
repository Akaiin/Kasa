import Banner from '../../components/Banner'
import Card from '../../components/Lodging_Card'
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
        <div>
            <Banner />
            <section>
                {lodgingData.map((lodging) => (
                    <Card
                        key={lodging.id}
                        title={lodging.title}
                        background={lodging.cover}
                        id={lodging.id}
                    />
                ))}
            </section>
        </div>
    )
}

export default Home
