import postsActionTypes from "./posts/actionTypes"
/**
 * Redux Action | 글의 상태변경 이벤트(Action)를 정의
 *
 * JSonPlaceholder에 API호출
 * 글 목록 로딩
 * 글 목록 로드
 * 글 목록 조회
 */

export const postFavoToggled = (postId) => ({
    type: postsActionTypes.postFavoToggled,
    payload: postId
});
export const postsFavoInitialize = () => ({ type: postsActionTypes.postsFavoInitialize });
export const postsLoading = () => ({ type: postsActionTypes.postsLoading });
export const postsLoaded = (posts) => ({
    type: postsActionTypes.postsLoaded,
    payload: posts,
});