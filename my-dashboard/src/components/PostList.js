import React from 'react';
import { Col } from 'react-bootstrap';
import {
    Link,
    useRouteMatch
} from "react-router-dom";

const PostList = ({ posts }) => {
    const { url } = useRouteMatch()
    return (

        <Col>
            {
                /* TODO : PostItem 컴포넌트 만들기 */
                posts.map(post => (
                    <Link to={`${url}/${post.id}`} key={post.id}>
                        <h2 >{post.title}</h2>
                    </Link>
                ))}
        </Col>

    );
};

export default PostList;