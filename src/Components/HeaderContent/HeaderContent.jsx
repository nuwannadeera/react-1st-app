import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../src/assets/react.svg';
import HomeContent from '../HomeContent/HomeContent';

function HeaderContent() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <a href="http://wwww.react.dev">
                            <img src={logo} alt='React' />
                        </a>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <HomeContent linkname="Home" url="/" />
                        <HomeContent linkname="About" url="/about" />
                        <HomeContent linkname="Contact" url="/contact" />
                        <HomeContent linkname="Login" url="/login" />
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    )
}

export default HeaderContent