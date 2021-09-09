import React from 'react';
// import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import { Title } from 'components/common';

/**
 * 타입 : 공용 컴포넌트
 * 용도 : 포스트의 상세한 내용을 그리는 컴포넌트
 */

const PostDetail = (props) => {
    console.log(props.match);
    /*
    TODO : action, dispatch를 이용해서 값을 가져 올 것?
    postId 값으로 posts에서 post를 찾아옴
    const post = useSelector((state) =>
        state.posts.find((post) => post.id == postId)
    );
    */

    return (
        <Col md="auto">
            <Title />
        </Col>
    );
};

export default PostDetail;