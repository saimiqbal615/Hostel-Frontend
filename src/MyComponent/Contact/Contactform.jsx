import React from 'react'
import './Cform.css';

function Contactform() {
  return (
 
<div >

  <div className="jumbotron jumbotron-sm">
    <div className="container">
      <div className="row" style={{width:'100%'}}>
        <div className="col-sm-12 col-lg-12" >
          <h1 className="h1">
            Contact us <small>Feel free to contact us</small>
          </h1>
        </div>
      </div>
    </div>
  </div> <br />
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="well well-sm">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-envelope" />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-control"
                    required="required"
                  >
                    <option value="na" selected="">
                      Choose One:
                    </option>
                    <option value="service">General Customer Service</option>
                    <option value="suggestions">Suggestions</option>
                    <option value="product">Product Support</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={9}
                    cols={25}
                    required="required"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-primary pull-right"
                  id="btnContactUs"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-4">
        <form>
          <legend>
            <span className="glyphicon glyphicon-globe" />
            &nbsp;Our office
          </legend>
          <address>
            <strong>Twitter, Inc.</strong>
            <br />
            Comsats University Lahore
            <br />
            J Block, LDA Avenue
            <br />
            <abbr title="Phone">Ph#</abbr>
            (123) 456-7890
          </address>
          <address>
            <strong>Full Name</strong>
            <br />
            <a href="mailto:#">cuilahore@gmail.com</a>
          </address>
        </form>
      </div>
    </div>
  </div>
  </div>
    
)
}


export default Contactform

