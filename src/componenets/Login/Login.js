import React, { Component } from 'react';
import { userSignIn } from '../../apiCalls/apiCalls'
import { connect } from 'react-redux';
import { addUser } from '../../actions';


export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "email": "",
      "password": ""
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleClick = async () => {
    const { addUser } = this.props;
    const { email, password } = this.state;
    const user = { email, password };
    const result = await userSignIn(user);
    addUser(result.user)
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

export const mapDispatchToProps = dispatch => ({
  addUser: (user) => dispatch( addUser(user) )
})

export default connect(null, mapDispatchToProps)(Login)
