import React, { Component } from 'react';
import { userSignIn } from '../../apiCalls/apiCalls'
import { connect } from 'react-redux';
import { addUser, errorMsg } from '../../actions';
import { Redirect } from 'react-router-dom';
import './Login.scss';

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
      this.props.errorMsg('Username and/or Password are incorrect')
    } 
  }

  render() {
    const { email, password } = this.state
    return (
      <div className='login-form'>
        <input
          className='login-form__email'
          type="text"
          placeholder="Email..."
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          className='login-form__password'
          type="password"
          placeholder="Password..."
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <p className='login-form__error'>{this.props.error}</p>
        <button className='login-form__button' onClick={() => this.handleClick()}>Login</button>
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
