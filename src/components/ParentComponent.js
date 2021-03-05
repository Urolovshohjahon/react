import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: "Parent"
        }
        this.sayHello = this.sayHello.bind(this);
    }
    sayHello = () => {
        alert(`Hello ${this.state.parentName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent funk={this.sayHello} />
            </div>
        )
    }
}

export default ParentComponent
