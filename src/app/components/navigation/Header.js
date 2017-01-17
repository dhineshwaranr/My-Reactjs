import React from "react";

//Stateless
/*export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                         <li>
                             <a href="#">Home</a>
                         </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};*/

export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#">{this.props.homeLink}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

};