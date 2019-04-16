import React, { Component } from 'react';
import './SignIn.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchUser } from '../../actions/userActions';

class SignIn extends Component<{fetchUser: Function}> {
  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="signIn">
        <div className="headingDiv">
          <h1 className="mainHeading">Sign In</h1>
        </div>
        <div className="form">
          <div className="form-line">
            <label htmlFor="username">Username:</label>
            <input id="username" type="text"/>
          </div>
          <div className="form-line">
            <label htmlFor="password">Password:</label>
            <input id="password" type="password"/>
          </div>
          <div className="form-actions">
            <button className="button button-confirm">Sign In</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchUser })(SignIn);