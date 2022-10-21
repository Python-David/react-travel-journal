import Earth from "../assets/earth.png"

function Header() {
    return (
        <nav>
            <img src={Earth} className="earth-img"></img>
            <h3 className="heading-text">my travel journal.</h3>
        </nav>
    )
}

export default Header