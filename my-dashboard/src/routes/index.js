import Header from '../components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostListPage from 'pages/post/PostListPage';

function Root() {

    return (
        <Router>
            <Route path="/" component={Header} />
            <Route path="/posts" component={PostListPage} />
        </Router>
    );
}

export default Root;