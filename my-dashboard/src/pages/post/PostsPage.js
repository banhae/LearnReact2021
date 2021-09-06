import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PostRouter from 'routes/post/index';

const PostsPage = () => {
    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <PostRouter />
            </Row>
        </Container>
    );
};

export default PostsPage;