import React from "react";

export class Dashboard extends  React.Component {
    render() {
        return (
            <div>
                <p>Hello from {this.props.name}</p>
                <p>His age is {this.props.user.age}</p>
                <div>
                    <h1>Hobbies :</h1>
                    <ul>{this.props.user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}</ul>
                </div>
                <hr />
                {this.props.children}
            </div>
        );
    }
}

Dashboard.protoType = {
    name:React.PropTypes.string,
    age:React.PropTypes.number,
    user:React.PropTypes.object
}