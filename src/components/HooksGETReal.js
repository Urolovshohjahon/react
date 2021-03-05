import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './myStyle.css'

function HooksGETReal() {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    //const [arr, setArr] = useState([])
    let arr = []


    useEffect((e) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log("O'xshamadiku...")
            })
    }, [])
    

    data.map(data => {
        arr.push(data)
    })


    const changeHandler = (e) => {
        e.preventDefault()
        arr = []
        data.map(user => {
            if (user.username.toLowerCase().includes(value.toLowerCase())) {//user.username.indexOf(value) != -1
                arr.push(user)
            }
        })
        console.log(arr)
        document.querySelector('input').value = ''
    }


    return (
        <div>
            <input type='text' onChange={e => setValue(e.target.value)} />
            <button onClick={changeHandler}>Search</button>
            <ul>
                {
                    arr.map((user) => <li>{user.username}</li>)
                }
            </ul>
        </div>
    )
}

export default HooksGETReal