import React, { useEffect, useState } from 'react'

function HooksTimer() {
    const [count, setCount] = useState(100)
    const tick = () => {
        setCount(ok => ok - 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default HooksTimer
