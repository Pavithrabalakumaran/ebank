import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
    errorMsg: '',
    currentState: false,
  }

  success = jwtToken => {
    const {history} = props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
  }

  fail = errorMsg => {
    this.setState({
      currentState: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const apiUrl: 'https://apis.ccbp.in/ebank/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.success(data.jwt_token)
    } else {
      this.fail(data.error_msg)
    }
  }

  onChangeUSerId = event => {
    this.setState({
      userId: event.target.value,
    })
  }

  onChangePin = event => {
    this.setState({
      pin: event.target.value,
    })
  }

  render() {
    const {userId, pin, errorMsg, currentState} = this.state

    return (
      <div className="main-container">
        <div className="center-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              className="website-login"
              alt="website login"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1 className="form-heading">Welcome back!</h1>
            <div className="input-container">
              <label htmlFor="user" className="label-cont">
                USER ID
              </label>
              <input
                type="text"
                id="user"
                placeholder="Enter USER ID"
                className="input-type"
                value={userId}
                onChange={this.onChangeUSerId}
              />
            </div>

            <div className="input-container">
              <label htmlFor="password" className="label-cont">
                PIN
              </label>
              <input
                type="text"
                id="password"
                placeholder="Enter PIN"
                className="input-type"
                value={passWord}
                onChange={this.onChangePin}
              />
            </div>

            <button type="submit" className="button-login">
              Login
            </button>
            {currentState === true && <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
