import React, { useEffect, useReducer, useRef } from 'react'
import axios from 'axios'

const initialState = {
    load: true,
    data: [],
    error: ''
}

const reduce = (state, action) => {
    switch (action.type) {
        case 'FETCH_DONE':
            return {
                load: false,
                data: action.payload,
                error: '',
            }
        case 'FETCH_ERROR':
            return {
                load: false,
                data: [],
                error: '<h1>Nimadir xato...</h1>',
            }
        default: 
            return state
    }
}

function DataFetchingTwo() {
    const inputRef = useRef(null)
    const [state, dispatch] = useReducer(reduce, initialState)
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then((res) => {
                dispatch({ type: "FETCH_DONE", payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ERROR" })
            })
        inputRef.current.focus()
    })
    return (
        <div>
            <input type='text' ref={inputRef}/>
            {
                state.load ? <h1>LOADING...</h1> : <div>
                    {
                        state.data.map(user => <p>{user.name}</p>)
                    }
                </div>
            }
        </div>
    )
}

export default DataFetchingTwo
