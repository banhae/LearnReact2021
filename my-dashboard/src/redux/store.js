import { createStore } from "redux";

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
        case "posts/postId":
            return { 
                ...state,
                posts: [...state.posts, action.item]
            }
        case "posts/postsLoaded" : {
            return {
                ...state,
                entities: action.payload,
            }
        }
        default:
            return state;
    }
}

export const postsLoaded = (posts) =>({
    type:'posts/postsLoaded',
    payload: posts,
})


export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);