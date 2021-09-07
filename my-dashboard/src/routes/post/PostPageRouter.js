import { BrowserRouter as Router, Route, useRouteMatch } from "react-router-dom";
import PostList from 'components/PostList';
import PostDetail from 'components/PostDetail';
import SideBar from "components/SideBar";
import { useSelector } from "react-redux"

function PostPageRouter() {
    const { url } = useRouteMatch()
    const posts = useSelector(state => state.posts);

    console.log(url)

    return (
        <Router>
            <Route path={`${url}/`} component={SideBar} />
            <Route path={`${url}/`} render={() => <PostList posts={posts} />} />
            <Route path={`${url}/:postId`} component={PostDetail} />
        </Router>
    );
}

export default PostPageRouter;