import React, {PureComponent } from "react";

import { connect } from "react-redux";
import { userData, updateUserData } from "../../../Services/actions";

import userImage from "../../../images/england.png";
import "./style.css";

export class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("Props", props.user);
    console.log("State", state.name);

    if (props.user !== state){
      return {
        name: props.user.name,
        email: props.user.email,
        password: props.user.password,
      };
    }
    
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    this.props.handleUserData();
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.handleUpdateUser(userData);
  };

  render() {
    console.log("render");
    return (
      <>
        <div className="container">
          <div className="profile">
            <div className="profile__container">
              <img src={userImage} className="profile__image" alt="profile" />
              <h3>Salman Saleem</h3>
            </div>
            <form className="profile__form">
              <label className="profile__form__input__label">UserName</label>
              <input
                type="text"
                placeholder="Full Name"
                value={this.state.name || ""}
                name="name"
                className="profile__form__input"
                value=""
                onChange={this.handleChange}
              />
              <label className="profile__form__input__label">Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                defaultValue={this.state.email || ""}
                className="profile__form__input"
                onChange={this.handleChange}
              />
              <label className="profile__form__input__label">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="profile__form__input"
                name="password"
                defaultValue={this.state.password || ""}
                onChange={this.handleChange}
              />
            </form>
            <button onClick={this.onSubmit} className="profile__form__submit">
              Updatee
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let userState = state.pro.profileUser;
  return {
    user: userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserData: () => dispatch(userData()),
    handleUpdateUser: (userData) => dispatch(updateUserData(userData)),
  };
};

const proFileCmp = connect(mapStateToProps, mapDispatchToProps)(index);
export default proFileCmp;
