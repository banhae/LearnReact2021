import React from 'react';
import { Col } from 'react-bootstrap';
import PostItem from './PostItem';

/**
 * 타입 : 공용 컴포넌트
 * 용도 : 포스트 리스트를 그리는 컴포넌트
 */

const PostList = ({ posts }) => {
    return (
        <Col>
            {
                posts.map(post =>
                    (<PostItem key={post.id} post={post} />)
                )
            }
        </Col>
    );
};

export default PostList;