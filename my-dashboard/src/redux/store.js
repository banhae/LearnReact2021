import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
import postReducer from "redux/postReducer";

/**
 * Redux Store | 글의 state를 저장하는 Store
 */

// const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const composedEnahcer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)

const store = createStore(postReducer, composedEnahcer);

export default store;
