import React, { Component } from 'react'

function Clicked() {
    console.log('ok')
}

function FunctionClick() {
    return (
        <button onClick={Clicked}>Click</button>
    )
}

export default FunctionClick
