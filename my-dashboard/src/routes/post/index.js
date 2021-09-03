import MainPanel from '..//pages/MainPanel'
import { Switch, Route, useRouteMatch, withRouter } from "react-router-dom";
import SideMenu from 'pages/SideMenu';
import PostLists from 'pages/PostLists';
import PostDetail from 'pages/PostDetail';

function PostRouter() {
    const { url } = useRouteMatch()

    return (
        <Switch>
            <Route path={`${url}/`} component={PostLists} />
            <Route path={`${url}/`} component={PostDetail} />
        </Switch>
    );
}

export default withRouter(PostRouter);