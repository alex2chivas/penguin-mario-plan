import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = e => {
        let setValue = 'set' + e.target.id.toLowerCase();

        if(setValue === 'setEmail'.toLocaleLowerCase()) {
            setEmail(e.target.value)
        }

        if(setValue === 'setPassword'.toLocaleLowerCase()) {
            setPassword(e.target.value)
        }
        
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className='white' autoComplete="off">
                <h5 className="grey-text text-darken-3">
                    Sign In
                </h5>
                <div className="input-field">
                    <label htmlFor='email'>
                        Email
                    </label>
                   <input type='email' id='email' onChange={handleChange} autoComplete="off"/>
                </div>
                <div className="input-field">
                    <label htmlFor='password'>
                        Password
                    </label>
                   <input type='password' id='password' onChange={handleChange} autoComplete="off"/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
