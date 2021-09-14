import postsActionTypes from "./posts/actionTypes"
import { createSelector } from 'reselect'
import { getPosts } from 'APIManger'
import { postsLoading, postsLoaded, postsFavoInitialize } from "./actions"
import { filters } from "./posts/filters"

const initState = {
    filter: filters.none,
    posts: [],
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

        case postsActionTypes.postsLoading: {
            return {
                ...state,
            };
        }
        case postsActionTypes.postsLoaded: {
            return {
                ...state,
                posts: action.payload,
            };
        }
        case postsActionTypes.postsFavoInitialize: {
            state.posts.forEach((post) => { post.favorite = false; });
            return state;
        }
        default:
            return state;
    }
}

export const fetchPosts = () => async (dispatch) => {

    dispatch(postsLoading());

    const response = await getPosts();

    dispatch(postsLoaded(response));
    dispatch(postsFavoInitialize());
}

export const selectAllPosts = (state) => state.posts;

export const selectFavoPost = createSelector(
    selectAllPosts,
    (posts) => {
        return posts.filter((post) => post.favorite)
    }
)

export default postReducer;