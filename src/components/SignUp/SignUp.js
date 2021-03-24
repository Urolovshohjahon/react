import React from 'react'
import '../SignIn/SignIn.css'


function SignIn() {
    return (
        <form className='form' method="POST" action="/SignUp">
            <h1 className='h1'>SignUp</h1>
            <input className="input" type="text" name="username" required placeholder="Username" />
            <input className="input" type="password" name="password" required placeholder="Password" />
            <input className="input" type="submit" value="Jo'natish" />
        </form>
    )
}

export default SignIn
