import React, { Component } from 'react';
import { userSignIn } from '../../apiCalls/apiCalls'
import { connect } from 'react-redux';
import { addUser, errorMsg } from '../../actions';
import { Redirect } from 'react-router-dom'

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
    try { 
      const result = await userSignIn(user);
      addUser(result.user)
      this.props.errorMsg('')
    }
    catch (e) {
      this.props.errorMsg('username or password incorrect')
    } 
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
        <p>{this.props.error}</p>
        {this.props.user ? <Redirect to='/' /> : null}
    </div>)
  }
}


const mapStateToProps = state => ({
  error: state.error,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  addUser: (user) => dispatch( addUser(user) ),
  errorMsg: error => dispatch( errorMsg(error) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
