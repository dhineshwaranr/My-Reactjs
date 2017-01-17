import React from "react";

import { Header } from  "./components/navigation/Header";

export class Root extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <Header/>
                </div>
                <hr />
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}