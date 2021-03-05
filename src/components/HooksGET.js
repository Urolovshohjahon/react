import React, { useEffect, useState } from 'react'
import axios from 'axios'


function HooksGET() {
    const [id, setId] = useState(1)
    const [data, setData] = useState({})
    useEffect((e) => {

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                console.log(data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    return (

        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <h1>{data.name}</h1>
        </div>
    )
}

export default HooksGET
