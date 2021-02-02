import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './style1.css';
import { Link } from 'react-router-dom';
import AlertMessage from '../../message/AlertMessage';

import {
  login_
} from "../../../actions/addContentAction"
const actions = {
  login_
}


class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      username: '',
      password: ''

    }
  }


  handleOnChange = (e) => {
    this.setState({

      [e.target.name]: e.target.value
    })
  }

  handleSubit = (e) => {
    e.preventDefault()
    const data = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login_(data)
    this.setState({
      username: '',
      password: ''
    })
  }


  render() {
    return (
      <Segment>
        <section>
          <div className="container1">
            <form onSubmit={this.handleSubit} >
              <div className="row">
                {/* <h6>Login with Social Media or Manually</h6>  */}
                <div className="vl">
                  <span className="vl-innertext">or</span>
                </div>

                <div className="col">
                  <a href="#" className="fb btn1">
                    <i className="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>
                  <a href="#" className="twitter btn1">
                    <i className="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
                  <a href="#" className="google btn1">
                    <i className="fa fa-google fa-fw"></i> Login with Google+
        </a>
                  {/* <span className="vl-innertext" >or</span>
        <Link to='/signup' className="google btn1">
          <i className="fa fa-modx fa-fw"></i> Manually Sign Up
          https://jobsnews-332c2.firebaseapp.com/__/auth/handler
          https://jobsnews-332c2.firebaseapp.com/__/auth/handler
        </Link> */}


                </div>

                <div className="col">
                  <div className="hide-md-lg">
                    <p>Or sign in manually:</p>
                  </div>

                  <input type="email" name="username" value={this.state.username} onChange={this.handleOnChange} placeholder="Username" required />
                  <input type="password" className='asd' name="password" value={this.state.password} onChange={this.handleOnChange} placeholder="Password" required />
                  <input type="submit" value="Login" />
                </div>

              </div>
            </form>
          </div>

          <div className="bottom-container1">
            <div className="row">
              <div className="col">
                <Link to='/signup' style={{ color: 'white' }} className="btn">Sign up</Link>
              </div>
              <div className="col">
                <a href="#" style={{ color: 'white' }} className="btn">Forgot password?</a>
              </div>
            </div>
          </div>
          <AlertMessage />
        </section>
      </Segment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginArray: state.addContentReducer.loginArray
  }
}


export default connect(mapStateToProps, actions)(Login)