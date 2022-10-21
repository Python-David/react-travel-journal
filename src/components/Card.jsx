import Mountain from "../assets/mountain.png"
import Location from "../assets/location.png"

function Card() {
    return (
        <div className="card">
            <img src={Mountain} className="card-img"></img>
            <div className="card-details">
                <div className="location-google-div">
                    <img src={Location} className="location-tag"></img>
                    <h2 className="card-title">Japan</h2>
                    <a href="https://www.google.com/maps" className="google-link">View on Google Maps</a>
                </div>
                <h1 className="card-location">Mount Fuji</h1>
                <h3 className="card-date">12 Jan, 2021 - 24 Jan, 2021</h3>
                <h4 className="card-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</h4>
            </div>
        </div>
    )
}

export default Card