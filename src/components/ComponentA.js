import React, { useContext } from 'react'
import { UseContext } from '../App'
function ComponentA() {
    const countContext = useContext(UseContext)
    return (
        <div>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA
