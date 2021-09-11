import { Col } from 'react-bootstrap';
/**
 * Layout Comp | 사이드바를 출력
 */
const SideBar = () => {

    return (
        <Col xs lg="2">
            <ul>
                {/** TODO: 링크걸기 */}
                <li>Posts</li>
                <li>Favorites</li>
            </ul>
        </Col>
    );
}

export default SideBar;