import Header from '../pages/Header'
import MainPanel from '..//pages/MainPanel'
import { BrowserRouter as Router, Route } from "react-router-dom";

function Root() {

    return (
        <Router>
            <Route path="/" component={Header} />
            <Route path="/posts" component={MainPanel} />
        </Router>
    );
}

export default Root;