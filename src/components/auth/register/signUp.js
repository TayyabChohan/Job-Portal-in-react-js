import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import './style22.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
  signUp_
} from "../../../actions/addContentAction"
const actions = {
  signUp_
}

class signUp extends Component {
  constructor(props) {
    super()
    this.state = {
      userName: '',
      email: '',
      psw: '',
      ps_repeat: ''

    }
  }
  onInputHandle = (e) => {
    this.setState({

      [e.target.name]: e.target.value
    })
  }
  handleOnsubmit = (e) => {
    e.preventDefault();
    const data = {
      userName: this.state.userName,
      email: this.state.email,
      psw: this.state.psw,
      ps_repeat: this.state.ps_repeat
    }
    this.props.signUp_(data)
    this.setState({
      userName: '',
      email: '',
      psw: '',
      ps_repeat: ''
    })
  }
  render() {
  
    return (

      <Segment>

        <section>
          <form onSubmit={this.handleOnsubmit} style={{ border: '1px solid #ccc' }}>
            <div className="container2">
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr />

              <label for="text"><b>User Name</b></label>
              <input type="text" placeholder="User Name" onChange={this.onInputHandle} value={this.state.userName} name="userName" required />

              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" onChange={this.onInputHandle} value={this.state.email} name="email" required />

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" onChange={this.onInputHandle} value={this.state.psw} name="psw" required />

              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" onChange={this.onInputHandle} value={this.state.ps_repeat} name="ps_repeat" required />

              <label>
                <input type="checkbox" checked="checked" name="remember" style={{ margin_bottom: '15px' }} /> Remember me
    </label>

              <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

              <div className="clearfix">
                {/* <button type="button" className="cancelbtn">Cancel</button> */}
                <Link to='/' className="google btn22">
                  <i className="fa fa-modx fa-fw"></i> Cancel
                </Link>
                <button type="submit" className="signupbtn">Sign Up</button>
              </div>
            </div>
          </form>

        </section>
      </Segment>
    );
  }
}

const mapStateToAction = (state) => {
  return {

  }
}

export default connect(mapStateToAction, actions)(signUp)