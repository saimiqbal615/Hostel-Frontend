 import React from 'react'
import './login.css'
import { BsPersonFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import logo from '../images/logo.png';
import { useState,Link } from 'react';
import { addUser } from '../service/api';


function Loginform() {
//---------------------state varable-----------------
const [userData, setuserData] = useState({

        username:"",
        password:""
})

const {username, password} = userData;

const handleChange =  (e) => {
  setuserData({...userData,
     [e.target.name]: e.target.value})
}

const addDetails = async (e) => {
  e.preventDefault();

 await addUser(userData).then((res)=>{
  console.log(res)
  if(res.data.message==='Found')
    alert(`User found`)
    else
    alert('User doesnt exist')
 })


}



  return (
    
    
    <div style={{width:'100%'}}>
    

<div data-aos="zoom-in" className="login-page bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h3 className="mb-3">Login Now</h3>
        <div className="bg-white shadow rounded">
          <div className="row">
            <div className="col-md-7 pe-0">
              <div className="form-left h-100 py-5 px-5">
                <form action="" className="row g-4">
                  <div className="col-12">
                    <label>
                      Username<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <div className="input-group-text">
                        <BsPersonFill />
                      </div>
                      <input
                        name='username'
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        onChange={(e)=> handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label>
                      Password<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <div className="input-group-text">
                        <FaLock />
                      </div>
                      <input
                        name='password'
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={(e)=> handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineFormCheck"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <a href="#" className="float-end text-primary">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="col-12">
                      
                    <button
                      type="button"
                      className="btn btn-primary px-4 float-end mt-4"
                      onClick={(e)=> addDetails(e)}
                    >
                      Login
                    </button> 
                
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 ps-0 d-none d-md-block">
              <div className="form-right h-100  bg-dark text-white text-center pt-3">
                <img style={{height:70}} className='login-logo' src={logo} alt="" /> <br /><br /> <br /> <br />
                <h2 className="fs-1">Welcome Back!!!!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </div>





    
  )
}

export default Loginform