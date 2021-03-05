import React, { useReducer } from 'react'
const initialState = 0
const reduce = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function HooksCounterOne() {
    const [count, dispatch] = useReducer(reduce, initialState)
    const [countTwo, dispatchTwo] = useReducer(reduce, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <div>Count - {countTwo}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default HooksCounterOne
