import React from 'react';
import {connect} from 'react-redux';

import Videos from './Videos.js';
import {stateMapper} from '../store/store.js';

class TrendingComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_VIDEOS"
        });
    }

    render() {
        return(
            <div>
                <h2>Trending Page</h2>
                <hr />
                <Videos />
            </div>
        );
    }
}

let Trending = connect(stateMapper)(TrendingComponent);

export default Trending;