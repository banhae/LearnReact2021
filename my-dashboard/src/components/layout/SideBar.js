import { Col } from 'react-bootstrap';
/**
 * 타입 : 공용 컴포넌트
 * 용도 : 화면 왼쪽에 사이드바를 출력
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