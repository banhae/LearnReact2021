import React from 'react';
import { PostList } from 'components/common/post';
import { SideBar } from "components/layout";

const PostPage = () => {
    return (
        <>
            <SideBar />
            <PostList />
        </>
    );
};

export default PostPage;