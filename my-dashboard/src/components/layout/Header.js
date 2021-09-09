import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
/**
 * 타입 : 공용 컴포넌트
 * 용도 : 사이트 상단에 네비바를 출력
 */
const Header = () => {

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Dummy title</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#">Favorites</Nav.Link>
                        <Nav.Link href="/posts">
                            Posts
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;