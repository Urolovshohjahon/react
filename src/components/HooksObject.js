import React, { useState } from 'react'

function HooksObject() {
    let [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <form>
            <input type='text' value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value })} />
            <br/>
            <input type='text' value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })} />
            <h1>Your name is {name.firstName}</h1>
            <h1>Your surname is {name.lastName}</h1>
        </form>
    )
}

export default HooksObject
