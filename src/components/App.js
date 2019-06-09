import React from 'react';
import {Provider} from 'react-redux';

import {store, stateMapper} from '../store/store.js';
import Menu from './Menu.js';
import Videos from './Videos.js';

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Menu />
                        </div>

                        <div className="col-md-9">
                            <h1>MyTube - Trending Videos</h1>
                            <hr />

                            <Videos />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;