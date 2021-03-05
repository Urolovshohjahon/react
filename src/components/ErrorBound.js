import React, { Component } from 'react'

class ErrorBound extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasGet: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasGet: true
        }
    }
    render() {
        if (this.state.hasGet) {
            return (
                <h1>Nimadir xatomasmi mabodo</h1>
            )
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBound
