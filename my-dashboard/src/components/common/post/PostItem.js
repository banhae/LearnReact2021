import React from 'react';
import { Link } from "react-router-dom";
import { Title } from 'components/common';
import FavoButton from './FavoButton';
import { Row, Col } from 'react-bootstrap';
/**
 * 타입 : 공용컴포넌트
 * 용도 : 포스트 목록에 아이템을 그리는 컴포넌트
 */
const PostItem = ({ post }) => {

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

export default PostItem;