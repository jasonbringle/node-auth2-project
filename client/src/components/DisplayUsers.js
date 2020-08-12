import React, { useState,useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth.js';
import axios from 'axios'
export default function DisplayUsers(){
const [ users, setUsers ] = useState()

    useEffect(()=>{
        axios.get("http://localhost:3002/api/users", {headers: {Authorization: localStorage.getItem("token")}})
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => {
            alert("Could not get users!")
        })
    },[])

    return (
        <div>
            {users && users.map(user => 
                <div key={user.id}>
                    <h1>{user.user}</h1>
            <p>{user.department}</p>
                </div>)}
            
        </div>
    )
}