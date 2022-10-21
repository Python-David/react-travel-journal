import Mountain from "../assets/mountain.png"
import Location from "../assets/location.png"

function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card-img"></img>
            <div className="card-details">
                <div className="location-google-div">
                    <img src={Location} className="location-tag"></img>
                    <h2 className="card-title">{props.item.location}</h2>
                    <a href={props.item.googleMapsUrl} className="google-link">View on Google Maps</a>
                </div>
                <h1 className="card-location">{props.item.title}</h1>
                <h3 className="card-date">{props.item.startDate} - {props.item.endDate}</h3>
                <h4 className="card-description">{props.item.description}</h4>
            </div>
            <hr className="line"></hr>
        </div>
    )
}

export default Card