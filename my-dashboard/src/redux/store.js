import { createStore } from "redux";
/**
 * 타입 : 리듀서, 액션, 스토어
 * 용도 : 데어터를 중앙 집중관리
 */
// 초기 데이터
const initState = {
    posts: [
        {
            id: 1,
            title: 'dummy1',
            content: 'bla bla bla bla bla bla bla bla bla',
            favorite: false,
        },
        {
            id: 2,
            title: 'dummy2',
            content: 'cla cla cla cla cla cla cla cla cla',
            favorite: false,
        },
        {
            id: 3,
            title: 'dummy3',
            content: 'dla dla dla dla dla dla dla dla dla',
            favorite: false,
        },
    ]
}

// TODO : reducer랑 store 분리할 것
function reducer(state = initState, action) {

    // TODO : 액션 코드 분리할 것
    switch (action) {
        case "posts/postId":
            return {
                ...state,
                posts: [...state.posts, action.item]
            }
        case "posts/postsLoaded": {
            return {
                ...state,
                entities: action.payload,
            }
        }
        default:
            return state;
    }
}

// TODO : 액션 제대로 만들 것
export const postsLoaded = (posts) => ({
    type: 'posts/postsLoaded',
    payload: posts,
})

// TODO : reducer랑 store 분리할 것
export default createStore(
    reducer,
    // 로컬에서 리덕스 데브툴을 사용하기 위한 config값
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);