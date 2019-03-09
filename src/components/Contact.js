import React, { Component } from 'react';
import Navbar from './Navbar';


class Contact extends Component {
  render() {
    return(
      <div>
      <Navbar/>
      <form method="post" id="contact">

        <div className="form-field">
          <label htmlFor="user_name">Name</label> <br/>
          <input type="text" name="user_name" required=""/>
        </div>

        <div className="form-field">
          <label htmlFor="user_email">Email</label> <br/>
          <input type="email" name="user_email" required=""/>
        </div>

        <div className="form-field">
          <textarea name="message"></textarea>
        </div>
        <input type="submit" value="Submit!"/>
        </form>
        </div>

    )
  }
}








export default Contact;