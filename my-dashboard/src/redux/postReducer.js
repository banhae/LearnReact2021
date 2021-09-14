import postsActionTypes from "./posts/actionTypes"

// TODO : JSON Placeholder에서 API호출해서 초기값을 설정할 것
const initState = {
    posts: [{ id: 1, title: "raccon1", content: "TMI TMI" },
    { id: 2, title: "raccon2", content: "CMI CMI" }]
}
/**
 * Redux Reducer | 글의 상태변경 이벤트(Action)를 처리
 */
const postReducer = (state = initState, action) => {
    // TODO : 액션에서 constant 값으로 케이스 값을 처리할 것
    switch (action.type) {
        case postsActionTypes.postFavoToggled: {
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id !== action.payload) {
                        return post
                    }

                    return {
                        ...post,
                        favorite: !post.favorite,
                    };
                }),
            };
        }
        default:
            state.posts.forEach((post) => { post.favorite = false })
            return state;
    }
}

export default postReducer;