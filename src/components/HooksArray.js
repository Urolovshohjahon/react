import React, { useState } from 'react'

function HooksArray() {
    const [items, setItem] = useState([])

    const adding = () => {
        setItem([...items, {
            value: document.getElementById('demo').value
        }])

    }
    return (
        <div>
            <input type='text' id="demo" />
            <button onClick={adding}>Add Item</button>
            <ul>
                {
                    items.map(item => (
                        <li>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HooksArray
