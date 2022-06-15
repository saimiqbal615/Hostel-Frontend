import React from 'react'
import './Registration.css'
import { useState } from 'react';
import { addApplicant } from '../service/api';

function Registration() {
 
 const [userData, setuserData] = useState({

    firstname:"",
    lastname:"",
    address:"",     
    email:"",
    phone:"",
 
})

const {firstname, lastname,address,email} = userData;

const handleChange =  (e) => {
setuserData({...userData, [e.target.name]: [e.target.value]})
}

const addDetails = async (e) => {
e.preventDefault();
await addApplicant(userData);
}
  
  return (

  
    
    <section className="vh-100 gradient-custom">
  <div data-aos="zoom-in" className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div
          className="card shadow-2-strong card-registration"
          style={{ borderRadius: 10 }}
        >
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                    name='firstname'
                      type="text"
                      id="firstName"
                      className="form-control form-control-lg" placeholder='First Name'
                      onChange={(e)=> handleChange(e)}
                    />

                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                    name='lastname'
                      type="text"
                      id="lastName"
                      className="form-control form-control-lg" placeholder=' Last Name'
                      onChange={(e)=> handleChange(e)}
                    />

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <input
                    name='address'
                      type="text"
                      className="form-control form-control-lg"
                      id="birthdayDate" placeholder='Address'
                      onChange={(e)=> handleChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <h6 className="mb-2 pb-1">Gender: </h6>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      defaultValue="option1"
                      defaultChecked=""
                    />
                    <label className="form-check-label" jsxFor="femaleGender">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" jsxFor="maleGender">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" jsxFor="otherGender">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input
                    name='email'
                      type="email"
                      id="emailAddress"
                      className="form-control form-control-lg" placeholder='Email'
                      onChange={(e)=> handleChange(e)}
                    />
                    
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input
                    name='phone'
                      type="tel"
                      id="phoneNumber"
                      className="form-control form-control-lg" placeholder='Phone Number'
                      onChange={(e)=> handleChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <select className="select form-control-lg">
                    <option value={1} disabled="">
                      Choose Room Type
                    </option>
                    <option value={2}>With AC</option>
                    <option value={3}>Without AC</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 pt-2">
                <input
                  className="btn btn-dark btn-lg"
                  type="submit"
                  defaultValue="Submit"
                  onClick={(e)=> addDetails(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   

  )
}

export default Registration