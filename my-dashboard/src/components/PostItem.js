import React from 'react';
import {
    Link
} from "react-router-dom";

const PostItem = ({ post, url }) => {
    return (
        <Link to={`${url}/${post.id}`} key={post.id}>
            <h2 >{post.title}</h2>
        </Link>
    );
};

PostItem.defaultProps = {
    post: {
        id: 0,
        title: "Oops"

    },
    url: "posts"
};

export default PostItem;