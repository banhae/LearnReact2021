import React from 'react';
import { useSelector } from "react-redux"
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";
import SideBar from '../../components/SideBar'

const PostListPage = () => {
    const posts = useSelector(state => state.posts);

    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <SideBar />
                <Col>
                    {posts.map(post => (
                        <Link to={`posts/${post.id}`} key={post.id}>
                            <h2 >{post.title}</h2>
                        </Link>
                    ))}
                </Col>

                <Col md="auto">
                    post detail
                </Col>
            </Row>
        </Container>
    );
}

export default PostListPage;