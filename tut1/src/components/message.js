import React, { Component } from "react";

class Message extends Component{

    constructor() {
        super()
        this.state = {
            message : "welcome visitor"
        }
    }

    changeState() {
        this.setState({
            message : "subscribed successfully"
        })
    }

    render() {

        return (
            <>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeState()}>subscribe</button>
            </>
        );
    }
}

export default Message;


// import React , {Component} from 'react';

// class welcome extends Component {

//     render() {
//         return <h1>first class component</h1>
//     }
// }

// export default welcome;