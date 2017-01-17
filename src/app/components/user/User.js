import React from "react";
import { browserHistory } from "react-router";

export class User extends React.Component {

    navigation() {
        browserHistory.push("/dashboard");
    }

    render() {
        return (
            <div>
                <h3>User</h3>
                <p>User Id : {this.props.params.id}</p>
                <button className="btn btn-default" onClick={this.navigation}>Navigate</button>
            </div>
        );
    }
}