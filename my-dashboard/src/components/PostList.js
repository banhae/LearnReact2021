import React from 'react';
import { Col } from 'react-bootstrap';
import {
    useRouteMatch
} from "react-router-dom";
import PostItem from './PostItem';

const PostList = ({ posts }) => {
    const { url } = useRouteMatch()
    return (

        <Col>
            {
                posts.map(post =>
                    (<PostItem key={post.id} post={post} url={url} />)
                )
            }
        </Col>
    );
};

// 디폴트 props 필요한가..?

export default PostList;