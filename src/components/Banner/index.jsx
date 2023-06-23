import backgroundImg from '../../assets/home-banner-img.png'

function Banner() {
    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className="banner__filter"></div>
            <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner
