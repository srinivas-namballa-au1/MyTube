import {store} from "./store/store.js";

store.subscribe(function() {
    console.log(store.getState());
})

store.dispatch({
    type: "FETCH_VIDEOS",
    videoType: "trending"
});