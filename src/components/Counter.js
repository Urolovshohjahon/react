import React, { Component } from 'react'
import UpdatedComp from './UpdateComp'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    Clikced = () => {
        this.setState(params => { return { count: params.count + 1 } }
        )
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.Clikced)}
            </div>
        )
    }
}

export default Counter
