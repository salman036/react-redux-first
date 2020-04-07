import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { loginRequest } from "../../../Services/actions";

import closeImage from "../../../images/PNG/cross.png";

import "./style.css";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handlChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const loginData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginRequest(loginData);

  };

  render() {
    console.log("Login ")
    return (
      <>
        <div className="container">
          <div className="signin">
            <div className="signin__close">
                <div className="signin__close__icon">
                  <img src={closeImage} alt="close"></img>
                </div>
            </div>

            <div className="signin__heading">
              <h1>Sign In</h1>
            </div>

            <form action="#" className="signin__form">
              <input
                type="text"
                placeholder="Name*"
                className="signin__form__email"
                name="name"
                onChange={this.handlChange}
              />
              <input
                type="email"
                placeholder="Email*"
                className="signin__form__email"
                name="email"
                onChange={this.handlChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="signin__form__password"
                name="password"
                onChange={this.handlChange}
              />
              {/* <div className="signin__form__check">
                <label className="cont">
                  <input type="checkbox" checked="checked"></input>
                  <span className="checkmark"></span>
                </label>
                <h1 className="signin__form__check__remember">Remember</h1>
              </div> */}
            </form>

            <div className="signin__submit">
              <button
                onClick={this.onSubmit}
                className="signin__submit__button"
              >
                Sign in
              </button>
            </div>

            <div className="signin__forgot">
              <div  className="signin__forgot__password">
                <h1>Forgot Password?</h1>
              </div>
              <Link to="/signup" className="signin__forgot__account">
                <h1>Create Account</h1>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispachToProps = dispatch => {
  return {
    loginRequest: loginData => dispatch(loginRequest(loginData))
  };
};

const loginCmp = connect(mapStateToProps, mapDispachToProps)(index);

export default loginCmp;
