import React, { Component } from "react";
import {Link} from 'react-router-dom';

import closeImage from '../../../images/PNG/cross.png';

import './style.css';

export class index extends Component {

  constructor(props){
    super(props);
    this.state = {
      fullname: null,
      email: null,
      password: null,
      re_typePassword: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = () => {
    const signUpData = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      re_typePassword: this.state.re_typePassword
    }
    this.props.signUpRequest(signUpData, this.props.history)
  }


  render() {
    return (
      <>
        <div className="container">
          <div className="signup">
            <div className="signup__close">
              <div >
                <div className="signup__close__icon">
                  <img src={closeImage} alt="close"></img>
                </div>
              </div>
            </div>
            <div className="signup__heading">
              <h1>Sign Up</h1>
            </div>
            <form action="#" className="signup__form">
              <input
                type="text"
                placeholder="Full Name*"
                className="signup__form__fullname"
                required
                name="fullname"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                placeholder="Email*"
                className="signup__form__email"
                required
                name="email"
                onChange={this.handleChange}
              ></input>
              <input
                type="password"
                placeholder="Password*"
                className="signup__form__password"
                required
                name="password"
                onChange={this.handleChange}
              ></input>
              <input
                type="password"
                placeholder="Re Type Password"
                className="signup__form__repassword"
                name="re_typePassword"
                onChange={this.handleChange}
              ></input>
            </form>

            <div className="signup__submit">
              <button onClick={this.onSubmit} className="signup__submit__button">Create</button>
            </div>

            <div className="signup__forgot">
              <div className="signup__forgot__already">
                <h1>Already a member?</h1>
              </div>
              <Link to="/login"  className="signup__forgot__siginin">
                <h1>Sign In</h1>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default index;
