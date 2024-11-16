import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <ul style={{ display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "black", color: "white" }}>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/recipe/add"> Add Recipe </Link> </li>
                <li> <Link to="/recipe/list"> View Recipes </Link> </li>
            </ul>
        </>
    )
}

export default Navbar