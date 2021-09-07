import { Col } from 'react-bootstrap';

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