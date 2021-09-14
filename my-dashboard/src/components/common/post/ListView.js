import React from 'react';
import { Col } from 'react-bootstrap';
import ItemView from './ItemView';
import { useSelector } from "react-redux"
import { selectAllPosts, selectFavoPost } from 'redux/postReducer';
/**
 * Common Comp | 글 목록을 출력
 */
const ListView = ({ path }) => {
    const posts = useSelector(selectAllPosts);
    const favoPosts = useSelector(selectFavoPost);

    if (!posts) {
        return (
            <Col>데이터가 없습니다.</Col>
        );
    }

    if (path === 'favorites') {
        return (
            <Col xs lg="4">
                {
                    favoPosts.map(post =>
                        (<ItemView key={post.id} post={post} path={path} />)
                    )
                }
            </Col>
        );
    } else {
        return (
            <Col xs lg="4">
                {
                    posts.map(post =>
                        (<ItemView key={post.id} post={post} path={path} />)
                    )
                }
            </Col>
        );
    }
};

export default ListView;