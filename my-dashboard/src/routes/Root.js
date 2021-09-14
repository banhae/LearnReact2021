import { Header } from 'components/layout'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostPageRouter from 'routes/post/PostPageRouter';
/**
 * Routing comp | Root의 라우팅을 담당
 */
function Root() {

    return (
        <Router>
            <Route path="/" component={Header} />
            <Route path="/posts" component={PostPageRouter} />
            {/*TODO: FavoritePage 만들기*/}
        </Router>
    );
}

export default Root;