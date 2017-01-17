import React from "react";

export class Dashboard extends  React.Component {

    constructor(props) {
        super();
        this.state ={
            age:props.age,
            status : 0,
            changeLink: props.initialValue
        };
        setInterval(() => {
            this.setState({
                status :  1
            });
        },10000)
        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component Will Mount");
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update",nextProps ,nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component Will Update",nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    makeMeOlder() {
        this.setState({age: this.state.age + 1 })
    }

    changeLinkTo() {
        this.props.onChangeLinkName(this.state.changeLink)
    }

    onInputChange(event) {
        this.setState({
            changeLink:event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>Hello {this.props.name} now ur {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <hr/>
                <button onClick={() => this.makeMeOlder()} className="btn btn-default">Make me older!</button>
                <button onClick={this.props.getChildProps} className="btn btn-default">Call Parent</button>
                <hr/>
                <input type="text" value={this.state.changeLink} onChange={(event) => this.onInputChange(event)}/>
                <button onClick={() => this.changeLinkTo()} className="btn btn-default">Change Header</button>
            </div>
        );
    }
}

Dashboard.protoType = {
    name:React.PropTypes.string,
    age:React.PropTypes.number,
}