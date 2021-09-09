import React from 'react';
import { Link } from "react-router-dom";
import { Title } from 'components/common';
/**
 * 타입 : 공용컴포넌트
 * 용도 : 포스트 목록에 아이템을 그리는 컴포넌트
 */
const PostItem = ({ post }) => {

    return (
        <div>
            <Link to={{
                pathname: `/posts/${post.id}`,
                // PostDetail 컴포넌트로 포스트 id를 전달하기 위해 사용
                state: {
                    postId: post.id,
                }
            }}>
                <Title title={post.title} />
            </Link>
        </div>
    );
};

export default PostItem;