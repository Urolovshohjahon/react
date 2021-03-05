import React, { useState } from 'react'

function HooksClick() {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <br/>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default HooksClick
