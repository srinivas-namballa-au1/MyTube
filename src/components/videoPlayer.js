import React from 'react';
import {connect} from 'react-redux';
import {store, stateMapper} from '../store/store.js';

class VideoPlayerComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_VIDEO_DATA",
            videoId: this.props.match.params.videoId
        });
    }

    renderTitle() {
        if(!this.props.currentPlayerVideo.snippet) {
            return "Loading...";
        } else {
            return this.props.currentPlayerVideo.snippet.title;
        }
    }

    render() {
        return(
            <div>
                <h2 className="text-dark">
                    {this.renderTitle()}
                </h2>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="player" className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`} allowFullScreen></iframe>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <h2>
                            Views: {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.viewCount} |
                            <span class="oi oi-thumb-up">
                                {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.likeCount}    
                            </span> |
                            <span class="oi oi-thumb-down">
                                {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.dislikeCount}
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.description}
                    </div>
                </div>
            </div>
            
        );
    }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;