import Header from 'components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostPage from 'pages/post/PostsPage';

function Root() {

    return (
        <Router>
            <Route path="/" component={Header} />
            {/*PostPage호출*/}
            <Route path="/posts" component={PostPage} />
            {/*TODO: FavoritePage 만들기*/}
        </Router>
    );
}

export default Root;