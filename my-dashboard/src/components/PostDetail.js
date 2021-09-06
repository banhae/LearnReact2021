import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

const PostDetail = ({ match }) => {
    // url에서 id 값을 받아옴 (posts/:postId)
    const { postId } = match.params;

    // TODO : action, dispatch를 이용해서 값을 가져 올 것?
    // postId 값으로 posts에서 post를 찾아옴
    const post = useSelector((state) =>
        state.posts.find((post) => post.id == postId)
    )

    if (!post) {
        return (
            <Col md="auto">
                Post Detail...
            </Col>
        );
    }

    // TODO : PostDetail 컨포넌트를 따로 만들 것
    return (
        <Col md="auto">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </Col>
    );

};

export default PostDetail;