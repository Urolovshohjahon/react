import React, { Component } from 'react'
import MemoComp from './components/MemoComp'
class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Shohjahon'
        }
    }

    render() {

        return (
            <div>
                <MemoComp name="bruce" />
            </div>
        )
    }
}

export default ParentComp
