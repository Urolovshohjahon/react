import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props){
        super(props)
        this.refMe = React.createRef()
        this.cbRef = null
        this.setCbRef = (element)=>{
            this.cbRef = element
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        //this.refMe.current.focus()
        //console.log(this.refMe)
    }
    render() {
        return (
            <div>
                <input type = 'test' ref={this.refMe}/>
                <input type = 'text' ref={this.setCbRef} />
            </div>
        )
    }
}

export default RefDemo
