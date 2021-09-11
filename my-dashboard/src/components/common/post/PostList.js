import React from 'react';
import { Col } from 'react-bootstrap';
import PostItem from './PostItem';
import { useSelector } from "react-redux"
/**
 * 타입 : 공용 컴포넌트
 * 용도 : 포스트 리스트를 그리는 컴포넌트
 */
const PostList = () => {
    // TODO : 
    // 포스트 리스트를 useSelector를 통해 리덕스에서 받아옴
    const posts = useSelector(state => state.posts);

    if (!posts) {
        return (
            <Col>데이터가 없습니다.</Col>
        );
    }

    return (
        <Col xs lg="4">
            {
                posts.map(post =>
                    (<PostItem key={post.id} post={post} />)
                )
            }
        </Col>
    );
};

export default PostList;