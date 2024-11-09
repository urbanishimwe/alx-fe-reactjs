import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <ul style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <li> <Link to="/home"> Home </Link></li>
                <li> <Link to="/services"> Services</Link> </li>
                <li> <Link to="/contact"> Contact us</Link> </li>
                <li> <Link to="/about"> About</Link> </li>
            </ul>
        </>
    )
}

export default Navbar