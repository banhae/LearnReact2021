import { createStore } from "redux";

export const GET_POSTS = "posts/GET_POSTS"
export const UPDATE_FAVORITE = "posts/UPDATE_FAVORITE"

export const getPosts = {
    type: GET_POSTS,
    payload: {

    }
}

export const updateFavorite = {
    type: UPDATE_FAVORITE,
    payload: {

    }
}

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

function reducer(state = initState, action) {
    switch (action) {
        case GET_POSTS:
            return { ...state, posts: [...state.posts, action.item] };
        default:
            return state;
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);