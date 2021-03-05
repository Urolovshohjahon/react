import React from 'react'

function HooksUmumiyExport() {

    const add = (a, b) => {
        return a + b
    }
    const isolate = (a, b) => {
        return  a - b
    }
    return [add, isolate]
}

export default HooksUmumiyExport
