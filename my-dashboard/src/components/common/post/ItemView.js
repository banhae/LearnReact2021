import React from 'react';
import { Link } from "react-router-dom";
import { Title } from 'components/common';
import FavoButton from './FavoButton';
import { Row, Col } from 'react-bootstrap';
/**
 * Common Comp | 글 목록의 각 항목을 출력
 */
// FIXME : 부모 comp에서 path받는 것 외에 다른 방법을 사용할 것
const ItemView = ({ post, path }) => {
    return (
        <div>
            <Row>
                <Col xs lg="1">
                    {/*FIXME : boolean으로 변환하지 않으면 propsType 에러가 발생함*/}
                    <FavoButton favorite={Boolean(post.favorite)} postId={post.id} />
                </Col>
                <Col>
                    <Link to={`/${path}/${post.id}`}>
                        <Title title={post.title} />
                    </Link>
                </Col>
            </Row>
            <hr />
        </div>
    );
};

export default ItemView;