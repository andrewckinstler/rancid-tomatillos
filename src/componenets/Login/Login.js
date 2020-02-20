import React, { Component } from 'react';
import { userSignIn } from '../../apiCalls/apiCalls'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleClick = async () => {
    const { email, password } = this.state;
    const user = { email, password }
    await userSignIn(user)
  }

  render() {
    const { email, password } = this.state
    return (
    <div>
        <input
          type="text"
          placeholder="Email..."
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Password..."
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button onClick={() => this.handleClick()}>Login</button>
    </div>)
  }

}