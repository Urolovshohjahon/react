import React, { useEffect, useState } from 'react'

function HooksCoords() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const coords = (e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',coords)
    })

    return (
        <div>
            <p>{x}</p>
            <p>{y}</p>
        </div>
    )
}

export default HooksCoords
