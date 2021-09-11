import React from 'react';
import { ListView } from 'components/common/post';
import { SideBar } from "components/layout";
/**
 * Layout Comp | 글 화면을 출력
 */
const PostPage = () => {
    return (
        <>
            <SideBar />
            <ListView />
        </>
    );
};

export default PostPage;