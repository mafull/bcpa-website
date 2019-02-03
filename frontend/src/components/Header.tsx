import React    from "react";
import { Link } from "react-router-dom";


const Header = () => (
    <div>
        <h1>Header</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/events">Events</Link></li>
        </ul>
        <hr />
    </div>
);

export default Header;
