import React, { Component } from 'react'

class ClickCounter extends Component {
    render() {
        const { count, Clicked } = this.props
        return (
            <div>
                <button onClick={Clicked}>Bu {count} marta bosildi</button>
            </div>
        )
    }
}

export default ClickCounter
