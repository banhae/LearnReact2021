import { Route } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import { useSelector } from "react-redux"
import { PostList, PostDetail } from 'components/common/post';
import { SideBar } from "components/layout";
/**
 * 타입 : 라우팅 컴포넌트
 * 용도 : Post페이지를 담당하는 라우터
 */
function PostPageRouter({ match }) {
    // 포스트 리스트를 useSelector를 통해 리덕스에서 받아옴
    const posts = useSelector(state => state.posts);

    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <Route path={`/`}>
                    <SideBar />
                    <PostList posts={posts} />
                </Route>
                {/* PostDetail에 match param을 통해서 posdId를 넘겨주기 위함 */}
                <Route path={`${match.path}/:postId`} component={PostDetail} />
            </Row>
        </Container>

    );
}

export default PostPageRouter;