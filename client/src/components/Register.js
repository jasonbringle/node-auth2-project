import React, { useState } from "react";
import axios from "axios";


export default function Register() {
  const initialValue = {
    user:'',
    department:'',
    password:'',
  }

  const [ value, setValue ] = useState({
    user:'',
    department:'',
    password:'',
  })
    
  const handleChange= e =>{
        setValue({
          ...value,
          [e.target.name]: e.target.value
        })
    }
    
  const submitHandler= e => {
      e.preventDefault()
        if(value){
          axios
            .post("http://localhost:3002/api/auth/register", value)
            .then(res=>{
              console.log(res.data)
              alert(`${res.data[0].user} has been added to the database!.. so exciting!`)} 
              )
            .catch(err => 
              alert('Could not submit the name and password...sorry.')
              )
              } else{
                alert('You must enter a name as well a password!')
              }
              clear()
  }

  const clear = ()=>{
    setValue(initialValue)
    
  }

return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={handleChange} name='user' value={value.user} placeholder="User"/>
            <input type="text" onChange={handleChange} name='department' value={value.department} placeholder="Department"/>
            <input type="password" onChange={handleChange} name='password' value={value.password} placeholder="Password"/>
        <button>Add User</button>
      </form>
    </div>
)
}