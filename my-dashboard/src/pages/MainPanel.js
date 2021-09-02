import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PostLists from './PostLists'
import SideMenu from './SideMenu'
import PostDetail from './PostDetail';
import { BrowserRouter as Router, Route } from "react-router-dom";

const MainPanel = () => {
    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <SideMenu />
                <Route path="/posts/" Component={PostLists} />
                <Route path="/posts/" Component={PostDetail} />
            </Row>
        </Container>
    );
}

export default MainPanel;