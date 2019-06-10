import React from 'react';
import {connect} from 'react-redux';

import Videos from './Videos.js';
import {stateMapper} from '../store/store.js';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ""
        };

        this.inputChanged = this.inputChanged.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    componentWillMount() {
        this.props.dispatch({
            type: "CLEAR_VIDEOS"
        });
    }

    inputChanged(event) {
        this.setState({
            query: event.target.value
        });
    }

    buttonClicked() {
        this.props.dispatch({
            type: "FETCH_VIDEOS",
            videoType: "search",
            query: this.state.query
        });
    }

    render() {
        return(
            <div>
                <h2>Search Videos on MyTube</h2>
                <hr />

                <div className="form-row">
                    <div className="col">
                        <input onChange={this.inputChanged} type="text" className="form-control form-control-lg" />
                    </div>

                    <button onClick={this.buttonClicked} className="btn btn-secondary btn-lg">Search</button>
                </div>

                <p></p>

                <Videos />
            </div>
        );
    }
}

let Search = connect(stateMapper)(SearchComponent);

export default Search;