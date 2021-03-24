import React from 'react'
import './SignIn.css'

function SignIn() {
    return (
        <form className='form' method="POST" action="/SignIn">
            <h1 className='h1'>SignIn</h1>
            <input className="input" type="text" name="username" required placeholder="Username" />
            <input className="input" type="password" name="password" required placeholder="Password" />
            <input className="input" type="submit" value="Jo'natish" />
        </form>
    )
}

export default SignIn
