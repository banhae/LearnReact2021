import { Col } from 'react-bootstrap';
import { useSelector } from "react-redux"
import { Link, Router, Switch } from 'react-router-dom';
import PostDetail from './PostDetail';

const PostLists = () => {
    const posts = useSelector(state => state.posts);
    return (
        <div>
            <Col>
                {posts.map(post => (
                    <Link to={`posts/${post.id}`} key={post.id}>
                        <h2 >{post.title}</h2>
                    </Link>
                ))}
            </Col>

            <Switch>
                <Router path="/posts/:postId" component={PostDetail}></Router>
            </Switch>
        </div>
    );
}

export default PostLists;