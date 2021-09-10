import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import { Title, Content } from 'components/common';
import { useParams } from "react-router-dom";
/**
 * 타입 : 공용 컴포넌트
 * 용도 : 포스트의 상세한 내용을 그리는 컴포넌트
 */
const PostDetail = () => {
    const props = useParams();
    //TODO : action, dispatch를 이용해서 값을 가져 올 것
    // postId 값으로 posts에서 post를 찾아옴
    const post = useSelector((state) =>
        // TODO : ==을 ===으로 고쳐야함
        state.posts.find((post) => post.id == props.postId)
    );

    if (!post) {
        return (
            <Col md="auto">
                데이터가 없습니다.
            </Col>
        );
    }
    // FIXME : 링크 처음 클릭식 Content propTypes 에러남
    return (
        <Col md="auto">
            <Title title={post.title} />
            <Content content={post.content} />
        </Col>
    );
};

export default PostDetail;