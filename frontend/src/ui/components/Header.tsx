import React    from "react";
import { Link } from "react-router-dom";

import Container    from "react-bootstrap/Container";
import Nav          from "react-bootstrap/Nav";
import Navbar       from "react-bootstrap/Navbar";


const Header: React.FC<{}> = () => (
    <div>
        <Navbar
            bg="primary"
            expand="sm"
            fixed="top"
            variant="dark"
        >
            <Container>
                <Navbar.Brand as={Link} to="/" >BCPA</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <Nav>
                        {
                            ["Events", "Clubs", "Leagues"].map(name => (
                                <Nav.Link key={name}
                                    as={Link}
                                    to={name.toLowerCase()}>
                                    {name}
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
                <Nav className="justify-content-end">
                    <Nav.Link
                        as={Link}

                        to="login">
                        Login
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
);

export default Header;
