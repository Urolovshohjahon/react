import React, { Component } from 'react';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            message: "Salom vizitor",
            count: 0
        }
    }
    changeMessage() {
        this.setState({
            message: "Qaleysiz o'zi.",
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.changeMessage()}>Like</button>
            </div>
        )
    }
}

export default Welcome;