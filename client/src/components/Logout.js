import React from "react";
import { useHistory } from "react-router-dom"

export default function Logout(){

const history = useHistory()

    const logOut= () => {
        window.localStorage.removeItem('token')
        history.push("/")
    }
    return (
        <div>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}