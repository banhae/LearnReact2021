import { Route } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import { PostPage, DetailView } from "components/layout";
/**
 * Routing Comp | 글 화면의 라우팅을 담당
 */
function PostPageRouter() {
    // FIXME : func 밖으로
    const PATH = "posts";

    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <PostPage />
                {/* PostDetail에 match param을 통해서 posdId를 넘겨주기 위함 */}
                <Route path={`/${PATH}/:postId`} component={DetailView} />
            </Row>
        </Container>
    );
}

export default PostPageRouter;