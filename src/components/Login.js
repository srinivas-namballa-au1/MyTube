import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin} from 'react-google-login';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.googleCallback = this.googleCallback.bind(this);
    }

    googleCallback(response) {
        if(!response || !response.accessToken) {
            alert("Sorry, Google signin has failed. Please try again.");
            return;
        }

        let user = {
            token: response.accessToken,
            name: response.profileObj.name
        };

        localStorage.setItem("user", JSON.stringify(user));

        this.props.history.push("/app");
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2 className="text-secondary">Login using Google</h2>
                        <hr />
                        <GoogleLogin
                            clientId="1024564966124-a85kr6dghm5sti0ghjesp1h6fi16g848.apps.googleusercontent.com"
                            onSuccess={this.googleCallback}
                            onFailure={this.googleCallback}
                            buttonText="Login"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;