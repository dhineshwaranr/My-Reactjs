import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import {Root} from "../app/Root"
import { Dashboard } from "./components/core/Dashboard";
import { User } from "./components/user/User";

//https://github.com/reactjs/react-router-tutorial/tree/master/lessons

class App extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
               <Route path={"/"} component={Root}>
                   <IndexRoute component={Dashboard} />
                   <Route  path={"dashboard"} component={Dashboard}/>
                   <Route path={"user"} component={User}/>
                   <Route path={"user/:id"} component={User}/>
               </Route>
                <Route path={"users"} component={User}/>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));