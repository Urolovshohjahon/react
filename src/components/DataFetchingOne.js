import React, { useEffect, useState } from 'react';
import axios from 'axios';
function DataFetchingOne() {
    const [load, setLoad] = useState(true)
    const [data, setData] = useState([]);
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setLoad(false)
                setData(res.data)
                setError('')
            })
            .catch((err) => {
                setLoad(false)
                setData([])
                setError("Nimadir xato...")
            })
    })
    return (
        <div>
            {
                data.map(user => <p>{user.name}</p>)
            }
            <p>{error}</p>
        </div>
    )
}

export default DataFetchingOne
