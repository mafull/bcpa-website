import React    from "react";
import { Link } from "react-router-dom";

import Nav      from "react-bootstrap/Nav";
import Navbar   from "react-bootstrap/Navbar";


// const itemsProperties = [
//     {
//         name: "home",
//         content: "Home",
//         target: "/"
//     },
//     {
//         name: "events",
//         content: "Events",
//         target: "/events"
//     },
//     {
//         name: "login",
//         content: "Login",
//         target: "/login"
//     }
// ];


const Header: React.FC<{}> = () => (
    <div>
        <Navbar bg="primary" expand="sm" variant="dark">
            <Navbar.Brand as={Link} to="/" >BCPA</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    {
                        ["Events", "Login"].map(name => (
                            <Nav.Link key={name}
                                as={Link}
                                to={name.toLowerCase()}>
                                {name}
                            </Nav.Link>
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header;
