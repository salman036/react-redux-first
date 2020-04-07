import React, { Component } from "react";
import { connect } from "react-redux";
import { alertHandler } from "../Services/actions";

export class Home extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.alertAlertProp()}>Clicke me</button>
      </div>
    );
  }
}

const MapDispatchToProps = dispatch => ({
  alertAlertProp: () => dispatch(alertHandler()),
});

const mapStateToProps = state => {
  {
  }
};
const HomeCmp = connect(mapStateToProps, MapDispatchToProps)(Home);

export default HomeCmp;
