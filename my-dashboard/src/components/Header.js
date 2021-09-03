import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Dummy title</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;