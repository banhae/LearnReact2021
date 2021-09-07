import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PostPageRouter from 'routes/post/PostPageRouter';

const PostsPage = () => {
    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <PostPageRouter />
            </Row>
        </Container>
    );
};

export default PostsPage;