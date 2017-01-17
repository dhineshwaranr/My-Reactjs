import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                             <li>
                                 <Link to={"/dashboard"} activeStyle={{color:"red"}}>Dashboard</Link>
                             </li>
                            <li>
                                <Link to={"/user"} activeClassName={"active"}>User</Link>
                            </li>
                            <li>
                                <Link to={"/user/10"} activeClassName={"active"}>User Id</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
}