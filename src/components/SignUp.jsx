import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const[data,setData]=useState(
        {
            "name":"",
            "emailId":"",
            "password":""
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]: event.target.value})
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status = "success")
                    {
                        alert("ADDED")
                    }
                else
                    {
                        alert("ERROR")
                    }
            }
        ).catch()
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                        <label htmlFor="" className="form-label">username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="password" name="password" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                        <button className="btn btn-success">LogIn</button>
                    </div>
                    <a href=''>Click to signin</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
