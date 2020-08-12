import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import useLocalStorage from "../hooks/useLocalStorage";

export default function Login(){
const [ login, setLogin] = useState({
    user:'',
    password:''
})

const [ value, setValue ] =  useLocalStorage()

const handleChange = e => {
    setLogin({
        ...login,
        [e.target.name]: e.target.value
    })
}

const history = useHistory()

    const logIn= () => {
        axios
        .post("http://localhost:3002/api/auth/login", login)
        .then(res => {
            setValue(res.data.token)
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