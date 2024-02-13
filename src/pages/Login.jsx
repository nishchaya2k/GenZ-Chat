import React from 'react'
import Add from "../img/addAvatar.png"


const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'>GenZ Chat</span>
                <span className='title'>Register</span>
                <form action="">
                    <input type="email" placeholder='email' name="" id="" />
                    <input type="password" placeholder='password' name="" id="" />

                    <button>Sign in</button>
                </form>
                <p>You don't have a account? Register</p>
            </div>
        </div>
    )
}

export default Login
