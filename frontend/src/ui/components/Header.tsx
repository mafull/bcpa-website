import _            from "lodash";
import React        from "react";
import { connect }  from "react-redux";
import { Link }     from "react-router-dom";

import Container    from "react-bootstrap/Container";
import Nav          from "react-bootstrap/Nav";
import Navbar       from "react-bootstrap/Navbar";

import authActions  from "state/auth/actions";


interface HeaderProps {
    isLoggedIn?: boolean;
    loggedInUser?: {
        name: string;
    };
    logOut(): void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, loggedInUser, logOut }) => (
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
                    {isLoggedIn
                        ? (
                            <React.Fragment>
                                <Nav.Link as={Link} to="profile">{_.get(loggedInUser, "name")}</Nav.Link>
                                <Nav.Link as={Link} to="" onClick={logOut}>Log out</Nav.Link>
                            </React.Fragment>
                        )
                        : (
                            <React.Fragment>
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                                <Nav.Link as={Link} to="register">Register</Nav.Link>
                            </React.Fragment>
                        )
                    }
                </Nav>
            </Container>
        </Navbar>
    </div>
);

export default connect((state: any) => ({
    isLoggedIn: state.auth.isLoggedIn,
    loggedInUser: state.auth.loggedInUser
}), {
    logOut: authActions.logOut
})(Header);
