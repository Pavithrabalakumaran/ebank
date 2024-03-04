import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    userId: '',
    password: '',
    errorMsg: '',
    currentState: false,
  }

  render() {
    return (
      <div className="main-container">
        <div className="center-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            className="website-login"
            alt="website login"
          />
        </div>
      </div>
    )
  }
}

export default Login
