import React from 'react';
import {connect} from 'react-redux';
import {store, stateMapper} from '../store/store.js';

class VideoPlayerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMoreClicked: false
        };

        this.showMoreClicked = this.showMoreClicked.bind(this);
    }

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_VIDEO_DATA",
            videoId: this.props.match.params.videoId
        });
    }

    componentWillMount() {
        this.props.dispatch({
            type: "CLEAR_VIDEO_DATA"
        });
    }

    showMoreClicked() {
        this.setState({
            showMoreClicked: true
        });
    }

    renderTitle() {
        if(!this.props.currentPlayerVideo.snippet) {
            return "Loading...";
        } else {
            return this.props.currentPlayerVideo.snippet.title;
        }
    }

    renderDescription() {
        if(this.state.showMoreClicked) {
            return(
                <p>
                    {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.description}
                </p>
            );
        } else {
            return(
                <p>
                    {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.shortDescription}
                    <button onClick={this.showMoreClicked} className="btn btn-sm btn-secondary bg-dark">Show More</button>
                </p>
            );
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

                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        {this.renderDescription()}
                    </div>
                </div>
            </div>
            
        );
    }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;