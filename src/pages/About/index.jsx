import bannerImg from '../../assets/about-banner-img.png'
import Collapsible from '../../components/Collapsible'
import Header from '../../components/Header'

function About() {
    return (
        <>
            <Header location={'about'} />
            <main className="about">
                <img
                    src={bannerImg}
                    alt="banner-img"
                    className="about__banner"
                ></img>
                <section className="about__collapsibles-container">
                    <Collapsible title="Fiabilité">
                        <p>
                            Les annonces postées sur Kasa garantissent une
                            fiabilité totale. Les photos sont conformes aux
                            logements, et toutes les informations sont
                            régulièrement vérifiées par nos équipes.
                        </p>
                    </Collapsible>
                    <Collapsible title="Respect">
                        <p>
                            La bienveillance fait partie des valeurs fondatrices
                            de Kasa. Tout comportement discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion
                            de notre plateforme.
                        </p>
                    </Collapsible>
                    <Collapsible title="Service">
                        <p>
                            La bienveillance fait partie des valeurs fondatrices
                            de Kasa. Tout comportement discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion
                            de notre plateforme.
                        </p>
                    </Collapsible>
                    <Collapsible title="Sécurité">
                        <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour
                            nos hôtes que pour les voyageurs, chaque logement
                            correspond aux critères de sécurité établis par nos
                            services. En laissant une note aussi bien à l'hôte
                            qu'au locataire, cela permet à nos équipes de
                            vérifier que les standards sont bien respectés. Nous
                            organisons également des ateliers sur la sécurité
                            domestique pour nos hôtes.
                        </p>
                    </Collapsible>
                </section>
            </main>
        </>
    )
}

export default About
