import React, { useState } from 'react'
import '../components/UseState.css'
const UseState = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  });

  // const [email,setEmail]=useState()
  // const [password,setPassword]=useState()

  const handleInput=(e)=>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,[name]: value,
    }));
  }
  return (
    <>
    <div className='container'>
      <div className='inner-container'><h1>UseState</h1></div>
      <form>
        <label>Name</label>
        <input onChange={handleInput} name='name' value={formData.name} />
        <br/>
        <label>Email</label>
        <input onChange={handleInput} name='email' value={formData.email} />
        <br/>
        <label>Password</label>
        <input onChange={handleInput} name='password' value={formData.password} />
        <br/>
      </form>



  </div>
      </>
  )
}

export default UseState