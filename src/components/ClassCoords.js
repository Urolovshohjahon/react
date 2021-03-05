import React, { Component } from 'react'

class ClassCoords extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }
    coords = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.coords)
    }
    render() {
        return (
            <div>
                <h1>{this.state.x}</h1>
                <h1>{this.state.y}</h1>
            </div>
        )
    }
}

export default ClassCoords