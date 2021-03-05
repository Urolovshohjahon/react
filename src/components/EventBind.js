import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super();

        this.state = {
            message: 'Hello'
        }

    }
    ClickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.ClickHandler}>EventBind</button>
            </div>
        )
    }
}

export default EventBind
