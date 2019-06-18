import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return(
            <div>
                <h2>
                    <span className="oi oi-play-circle"> MyTube</span>
                </h2>
                <hr />

                <ul className="list-group">
                    <li className="list-group-item bg-dark text-white">Menu</li>
                    <li className="list-group-item">
                        <Link to="/app">Trending</Link>    
                    </li>
                    <li className="list-group-item">
                        <Link to="/app/search">Search</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/app/profile">Profile</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/app/logout">Logout</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;