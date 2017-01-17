import React from "react";
import { render } from "react-dom"

import { Header } from  "./components/navigation/Header";
import { Dashboard } from "./components/core/Dashboard";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            homeLink:"Dashboard",
            homeMounted:true
        };
    }

    getChildProps() {
        alert("Hello im parent");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink:newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render() {
        let homeComp = "";
        if(this.state.homeMounted){
            homeComp = (<Dashboard onChangeLinkName={this.onChangeLinkName.bind(this)}
                                  getChildProps={this.getChildProps}
                                  name={"Dinesh"}
                                  age={27}
                                  initialValue={this.state.homeLink}/>);
        }
        return(
            <div className="container">
                <div className="row">
                    <Header homeLink={this.state.homeLink}/>
                </div>
                <div className="row">
                    {homeComp}
                </div>
                <div className="row">
                    <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));