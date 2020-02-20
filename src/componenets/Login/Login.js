import React, { Component } from 'react';

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
    </div>)
  }

}