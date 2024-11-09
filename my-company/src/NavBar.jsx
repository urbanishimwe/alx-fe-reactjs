import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <ul>
                <li> <Link to="/home"> Home </Link></li>
                <li> <Link to="/services"> Services</Link> </li>
                <li> <Link to="/contact"> Contact us</Link> </li>
                <li> <Link to="/about"> About</Link> </li>
            </ul>
        </>
    )
}

export default NavBar