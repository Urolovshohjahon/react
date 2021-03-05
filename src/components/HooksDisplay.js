import React, { useState } from 'react'

function HooksDisplay() {

    const [display, setDisplay] = useState(true)

    const Clicked = () => {
        if (display) {
            setDisplay(false)
        }
        else {
            setDisplay(true)
        }
    }
    return (
        <div>
            <button onClick={Clicked}>Click</button>
            {display && <h1>sdbsgbwdgb</h1>}
        </div>
    )
}

export default HooksDisplay
