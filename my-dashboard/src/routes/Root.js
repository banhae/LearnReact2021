import { Header } from 'components/layout'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostPageRouter from 'routes/post/PostPageRouter';
import FavoPageRouter from 'routes/favorite/FavoPageRouter'
/**
 * Routing comp | Root의 라우팅을 담당
 */
function Root() {

    return (
        <Router>
            <Route path="/" component={Header} />
            <Route path="/posts" component={PostPageRouter} />
            <Route path="/favorites" component={FavoPageRouter} />
        </Router>
    );
}

export default Root;