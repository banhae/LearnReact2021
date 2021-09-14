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
            <Row>
                <Col xs lg="1">
                    <FavoButton favorite={post.favorite} postId={post.id} />
                </Col>
                <Col>
                    <Link to={`/posts/${post.id}`}>
                        <Title title={post.title} />
                    </Link>
                </Col>
            </Row>
            <hr />
        </div>
    );
};

export default ItemView;