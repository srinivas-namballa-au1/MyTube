function fetchVideos(store, videoType) {

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&key=KEY&chart=mostPopular&maxResults=30")
    .then(function(data) {
        return data.json();
    })
    .then(function(response) {
        store.dispatch({
            type: "VIDEOS_LOADED",
            videos: response.items
        });
    })
    .catch(function(err) {
        console.log("fetch error => ", err);
    });

}

export {fetchVideos};