import React from 'react';
import {Provider} from 'react-redux';

import {store, stateMapper} from '../store/store.js';
import Menu from './Menu.js';
import Videos from './Videos.js';
import Trending from './Trending.js';
import Search from './Search.js';

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
                            <Trending />
                            <Search />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;