import React from "react";
import { render } from "react-dom"

import { Header } from  "./components/navigation/Header";
import { Dashboard } from "./components/core/Dashboard";

class App extends React.Component {
    render() {
        var user = {
            age:24,
            hobbies:["Reading","Coding"]
        };
        return(
            <div className="container">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <Dashboard name={"Dinesh"} user={user}>
                        <p>Im a child paragraph!!!</p>
                    </Dashboard>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));