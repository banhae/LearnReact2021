import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
/**
 * Layout Comp | 사이드바를 출력
 */
const SideBar = () => {

    return (
        <Col xs lg="2">
            <ul>
                <Link to='/posts'>Posts</Link>
                <hr />
                <Link to='/favorites'>Favorites</Link>
            </ul>
        </Col>
    );
}

export default SideBar;