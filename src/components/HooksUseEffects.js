import React, { useEffect, useState } from 'react'

function HooksUseEffects() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        document.title = `Siz ${count} marta bosdingiz!`
    })
    return (
        <div>
            <h1>{name}</h1>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => { setCount(count + 1) }}>{count}</button>
        </div>
    )
}

export default HooksUseEffects
