import React, { Component } from 'react'

function ChildComponent(props){
    return (
        <div>
            <button onClick = {props.funk}>CLICK</button>
        </div>
    )
}

export default ChildComponent
