import {createStore, combineReducers} from "redux";

import videosReducer from "./reducers/videosReducer.js";

let reducer = combineReducers({
    videos: videosReducer
});

let store = createStore(reducer);

export {store};