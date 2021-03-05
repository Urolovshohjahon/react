import React, { Component } from 'react'

class TheFirst extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 'red',
            transform:'translateX(200px)',
            transition:'1s'
        }
    }
    states = () => {
        this.setState({
            color:'lime',
            transform:'translateX(0px)'
        })
    }
    render() {
        return (
            <div>
                <h1 style={{color:this.state.color,transform:this.state.transform,transition:this.state.transition}}>bu yozuv</h1>
                <button onClick={this.states}>click</button>
            </div>
        )
    }
}

export default TheFirst
