import { Route } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import { PostDetail } from 'components/common/post';
import { PostPage } from "components/layout";
/**
 * 타입 : 라우팅 컴포넌트
 * 용도 : Post페이지를 담당하는 라우터
 */
function PostPageRouter() {
    const PATH = "posts";

    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <PostPage />
                {/* PostDetail에 match param을 통해서 posdId를 넘겨주기 위함 */}
                <Route path={`/${PATH}/:postId`} component={PostDetail} />
            </Row>
        </Container>
    );
}

export default PostPageRouter;