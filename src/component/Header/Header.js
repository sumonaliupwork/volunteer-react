import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logos/Group 1329.png';
import Button from 'react-bootstrap/Button';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to={'/'}><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                            <Nav.Link as={Link} to={'/donation'}>Doation</Nav.Link>
                            <Nav.Link as={Link} to={'/events'}>Events</Nav.Link>
                            <Nav.Link as={Link} to={'/blog'}>Blog</Nav.Link>

                            <span>
                                {
                                    user.email ? <Button onClick={logOut} variant="primary">Log-Out</Button>
                                        :
                                        <Link to={'/register'}><Button variant="primary">Register</Button></Link>
                                }

                                <Button variant="secondary">Admin</Button>{' '}

                            </span>
                            {user.email && <span className='userName'><Nav.Link>{user.displayName}</Nav.Link></span>}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;