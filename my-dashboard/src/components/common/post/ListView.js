import React from 'react';
import { Col } from 'react-bootstrap';
import ItemView from './ItemView';
import { useSelector } from "react-redux"
/**
 * Common Comp | 글 목록을 출력
 */
const ListView = () => {
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
                    (<ItemView key={post.id} post={post} />)
                )
            }
        </Col>
    );
};

export default ListView;