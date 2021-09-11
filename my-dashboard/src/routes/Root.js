import { Header } from 'components/layout'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostPageRouter from 'routes/post/PostPageRouter';
/**
 * Routing comp | Root의 라우팅을 담당
 */
// TODO : Root를 따로 분리해서 사용하는 이유에 대해서 확실히 알아낼 것
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