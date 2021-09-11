import React from 'react';
import { Link } from "react-router-dom";
import { Title } from 'components/common';
import FavoButton from './FavoButton';
import { Row, Col } from 'react-bootstrap';
/**
 * Common Comp | 글 목록의 각 항목을 출력
 */
const ItemView = ({ post }) => {

    return (
        <div>
            <Link to={`/posts/${post.id}`}>
                <Row>
                    <Col xs lg="1">
                        <FavoButton favorite={post.favorite} />
                    </Col>
                    <Col>
                        <Title title={post.title} />
                    </Col>
                </Row>
            </Link>
            <hr />
        </div>
    );
};

export default ItemView;