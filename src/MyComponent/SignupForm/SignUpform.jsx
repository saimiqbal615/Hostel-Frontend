import React from 'react'
import './SignUpform.css'
import {Link} from 'react-router-dom'
function SignUpform() {
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
        />
      </div>
    </div>
    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <i className="fa fa-lock" />
        </span>
        <input
          type="text"
          className="form-control"
          name="password"
          placeholder="Password"
          required="required"
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
          type="text"
          className="form-control"
          name="confirm_password"
          placeholder="Confirm Password"
          required="required"
        />
      </div>
    </div>
    <div className="form-group">
     <center>
       <a href="/login">
      <button type="submit" className="btn btn-primary btn-block btn-lg">
        Sign Up
      </button>
      </a>
      </center>
    </div>
    <p className="small text-center">
      By clicking the Sign Up button, you agree to our <br />
      <a href="#">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a>
      .
    </p>
  </form>
  <div className="text-center">
    Already have an account? <Link to="/login">Login here</Link>
  </div>
</div>


  )
}

export default SignUpform