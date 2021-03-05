import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
    
        this.RefMethod = React.createRef()
    }
    FocusOn = ()=>{
        this.RefMethod.current.focus()
    }
    render() {
        return (
            <div>
                <input type = 'text' ref={this.RefMethod}/>
                <button onClick={this.FocusOn}>click</button>
            </div>
        )
    }
}

export default Input
