import { createStore } from "redux";
import postReducer from "redux/postReducer";
/**
 * Redux Store | 글의 state를 저장하는 Store
 */
const store = createStore(postReducer);

export default store;