import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import { Title, Content } from 'components/common';
/**
 * 타입 : 공용 컴포넌트
 * 용도 : 포스트의 상세한 내용을 그리는 컴포넌트
 */
const PostDetail = (props) => {
    //TODO : action, dispatch를 이용해서 값을 가져 올 것
    // postId 값으로 posts에서 post를 찾아옴
    const post = useSelector((state) =>
        // TODO : ==을 ===으로 고쳐야함
        state.posts.find((post) => post.id == props.match.params.postId)
    );

    return (
        <Col md="auto">
            <Title title={post.title} />
            <Content content={post.content} />
        </Col>
    );
};

export default PostDetail;