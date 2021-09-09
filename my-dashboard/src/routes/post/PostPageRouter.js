import { Route } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import { useSelector } from "react-redux"
import { PostList, PostDetail } from 'components/common/post';
import { SideBar } from "components/layout";
/**
 * 타입 : 라우팅 컴포넌트
 * 용도 : Post페이지를 담당하는 라우터
 */
function PostPageRouter() {
    // 포스트 리스트를 useSelector를 통해 리덕스에서 받아옴
    const posts = useSelector(state => state.posts);

    return (
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <Route path={`/`}>
                    <SideBar />
                    <PostList posts={posts} />
                </Route>
                {/*FIXME - PostDetail에 match의 path에 포스트 id가 아니라 "posts"값이 넘어 오는 문제가 있음 */}
                <Route path={`/:postId`} component={PostDetail} />
            </Row>
        </Container>

    );
}

export default PostPageRouter;