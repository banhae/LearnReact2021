import React from 'react';
import { ListView } from 'components/common/post';
import { SideBar } from "components/layout";

const PostPage = () => {
    return (
        <>
            <SideBar />
            <ListView />
        </>
    );
};

export default PostPage;