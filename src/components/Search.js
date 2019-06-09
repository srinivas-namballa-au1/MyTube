import React from 'react';

import Videos from './Videos.js';

class Search extends React.Component {
    render() {
        return(
            <div>
                <h2>Search Videos on MyTube</h2>
                <hr />

                <Videos />
            </div>
        );
    }
}

export default Search;