import React from 'react';
import { ListView } from 'components/common/post';
import { SideBar } from "components/layout";
/**
 * Layout Comp | 글 화면을 출력
 */
// FIXME : 부모 comp에서 path받는 것 외에 다른 방법을 사용할 것
const PostPage = ({ path }) => {
    return (
        <>
            <SideBar />
            <ListView path={path} />
        </>
    );
};

export default PostPage;