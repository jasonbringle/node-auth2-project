import React, { useState } from "react";
import axios from 'axios';
import { history } from 'react'

export default function Login(){
const [ login, setLogin] = useState({
    user:'',
    password:''
})


const handleChange = e => {
    setLogin({
        ...login,
        [e.target.name]: e.target.value
    })
}

    const logIn= () => {
        axios
        .post("http://localhost:3002/api/auth/login", login)
        .then(res => {
            window.localStorage.setItem(res.data.user.id, JSON.stringify(res.data.token));
            history.push("/users")

        })
        .catch(err => {
            console.log({message:"There was an error"})
        })
    }
    return (
        <div>
            <input type="text" onChange={handleChange} name='user' value={login.user} placeholder="User"/>
            <input type="password" onChange={handleChange} name='password' value={login.password} placeholder="Password"/>
        
            <button onClick={logIn}>Login</button>
        </div>
    )
}