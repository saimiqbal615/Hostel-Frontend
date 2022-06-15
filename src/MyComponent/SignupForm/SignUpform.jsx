import React from 'react'
import './SignUpform.css'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import {signinUser} from '../service/api'
function SignUpform() {

  const [userData, setuserData] = useState({

   username:"",     
   email:"",
   password:"",
   confirmPassword:"",
 
})

  const {username, email, password, confirmPassword} = userData;

  const handleChange = (e) =>{
   setuserData({...userData,[e.target.name] : e.target.value})

  }


  const addDetails = async (e) => {
    e.preventDefault();
    await signinUser(userData);

  }
   
  return (
    <div style={{width:'100%'}}>

  <form data-aos="zoom-in"  className="signup-form" action="/examples/actions/confirmation.php" method="post">
    <h2>Create Account</h2>
    <p className="lead">It's free and hardly takes more than 30 seconds.</p>
    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <i className="fa fa-user" />
        </span>
        <input
          
          type="text"
          className="form-control"
          name="username"
          placeholder="Username"
          required="required"
          onChange={(e)=> handleChange(e)}
        />
      </div>
    </div>
    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <i className="fa fa-paper-plane" />
        </span>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email Address"
          required="required"
          onChange={(e)=> handleChange(e)}
        />
      </div>
    </div>
    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <i className="fa fa-lock" />
        </span>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required="required"
          onChange={(e)=> handleChange(e)}
        />
      </div>
    </div>
    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <i className="fa fa-lock" />
          <i className="fa fa-check" />
        </span>
        <input
          type="password"
          className="form-control"
          name="confirmpassword"
          placeholder="Confirm Password"
          required="required"
          onChange={(e)=> handleChange(e)}
        />
      </div>
    </div>
    <div className="form-group">
     <center>
       {/* <a href="/login"> */}
      <button type="submit" className="btn btn-primary btn-block btn-lg" 
      onClick={(e)=> addDetails(e)}>
        Sign Up
      </button>
      {/* </a> */}
      </center>
    </div>
    <p className="small text-center">
      By clicking the Sign Up button, you agree to our <br />
      <Link to="#">Terms &amp; Conditions</Link>, and <Link to="#">Privacy Policy</Link>
    </p>
  </form>
  <div className="text-center">
    Already have an account? <Link to="/login">Login here</Link>
  </div>
</div>


  )
}

export default SignUpform