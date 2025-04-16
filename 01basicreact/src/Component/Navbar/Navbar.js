import "./Navbar.css"
import logo from "./logo192.png"
import {Link} from "react-router-dom"

const Navbar = () => {
    const design = (
        <div className="nav">
            <img src={logo} width="50px" alt="logo"/>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/teams">Teams</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </div>
    );
    return design;
}

export default Navbar;







