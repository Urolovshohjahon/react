import React, { Component } from 'react'

class ClassClick extends Component {
    Clicked = () => {
        console.log("Okeyk")
    }
    render() {

        return (
            <div>
                <button onClick={this.Clicked}>ClassClick</button>
            </div>
        )
    }
}

export default ClassClick
