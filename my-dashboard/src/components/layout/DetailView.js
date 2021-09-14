import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import { Title, Content } from 'components/common';
import { FavoButton } from 'components/common/post';
import { useParams } from "react-router-dom";
/**
 * Layout Comp | 글의 상세 내용을 구성
 */
const DetailView = () => {
    // FIXME : props외의 다른 이름으로 수정
    const props = useParams();
    //TODO : custom createSelect를 만들어서 값을 가져 올 것
    // postId 값으로 posts에서 post를 찾아옴
    const post = useSelector((state) =>
        state.posts.find((post) => post.id === Number(props.postId))
    );

    if (!post) {
        return (
            <Col md="auto">
                데이터가 없습니다.
            </Col>
        );
    }

    // FIXME : 즐겨찾기가 해제되도 디테일뷰는 남아있는 버그 수정
    return (
        <Col xs lg="4">
            <FavoButton favorite={post.favorite} postId={post.id} />
            <Title title={post.title} />
            <Content body={post.body} />
        </Col>
    );
};

export default DetailView;