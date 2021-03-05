import React, { Component } from 'react'

class ConditonalComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin:true
        }
    }
    render() {
        let message
        //IF ELSE-----
        //if(this.state.isLogin)message = 'Shohjahon'
        //else message = 'mehmon'

        //Ternary operator
        this.state.isLogin ?
        message = 'Shohjahon':
        message = 'mehmon'
        return (
            <div>
                <p>Assalomu alaykum, {message}</p>
            </div>
        )
    }
}

export default ConditonalComponent
