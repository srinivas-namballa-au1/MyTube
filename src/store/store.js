import {createStore, combineReducers} from "redux";

import videosReducer from "./reducers/videosReducer.js";
import isVideosLoadingReducer from "./reducers/isVideosLoadingReducer.js";

let reducer = combineReducers({
    videos: videosReducer,
    isVideoLoading: isVideosLoadingReducer
});

let store = createStore(reducer);

store.subscribe(() => {
    console.log("Dispatched ===>", store.getState());
});

function stateMapper(state) {
    return state;
}

export {store, stateMapper};