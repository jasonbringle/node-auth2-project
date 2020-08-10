import React, { useState,useEffect } from "react";
import axios from "axios";

export default function DisplayUsers(){
const [ users, setUsers ] = useState()

    useEffect(()=>{
        const token = window.localStorage.getItem(15);

        axios
        .get("http://localhost:3002/api/users", token)
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