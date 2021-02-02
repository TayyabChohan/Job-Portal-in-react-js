import React, { Component } from "react";
import { getJobCategory } from '../../actions/addContentAction';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './style.css';

const action = {
  getJobCategory
}
class Navbar extends Component {



  HomeHandle = (e) => {

    const data = {
      job_cat: 'home'
    }
    this.props.getJobCategory(data)
  }
  allJobsHandle = (e) => {

    const data = {
      job_cat: 'alljobs'
    }
    this.props.getJobCategory(data)
  }

  govtHandle = (e) => {

    const data = {
      job_cat: 'govt'
    }
    this.props.getJobCategory(data)
  }
  ntsHandle = (e) => {

    const data = {
      job_cat: 'nts'
    }
    this.props.getJobCategory(data)
  }
  fpscHandle = (e) => {

    const data = {
      job_cat: 'fpsc'
    }
    this.props.getJobCategory(data)
  }
  ppscHandle = (e) => {

    const data = {
      job_cat: 'ppsc'
    }
    this.props.getJobCategory(data)
  }
  paecHandle = (e) => {

    const data = {
      job_cat: 'paec'
    }
    this.props.getJobCategory(data)
  }
  amryHandle = (e) => {

    const data = {
      job_cat: 'army'
    }
    this.props.getJobCategory(data)
  }
  pafHandle = (e) => {

    const data = {
      job_cat: 'paf'
    }
    this.props.getJobCategory(data)
  }
  enggHandle = (e) => {

    const data = {
      job_cat: 'navy'
    }
    this.props.getJobCategory(data)
  }
  policeHandle = (e) => {

    const data = {
      job_cat: 'police'
    }
    this.props.getJobCategory(data)
  }
  wpdaHandle = (e) => {

    const data = {
      job_cat: 'karachi'
    }
    this.props.getJobCategory(data)
  }
  bankHandle = (e) => {

    const data = {
      job_cat: 'bank'
    }
    this.props.getJobCategory(data)
  }
  teachHandle = (e) => {

    const data = {
      job_cat: 'lahore'
    }
    this.props.getJobCategory(data)
  }
  IslamabadHandle = (e) => {

    const data = {
      job_cat: 'islamabad'
    }
    this.props.getJobCategory(data)
  }
  handleLogin = () => {

  }
  removehandle=()=>{
    localStorage.removeItem('login')
  }

  render() {

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 ">
        <div className="container">
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.HomeHandle}>Home</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.allJobsHandle} >All Jobs</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.govtHandle} >Govt</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.ntsHandle}>NTS</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.fpscHandle}>FPSC</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.ppscHandle}>PPSC</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.paecHandle}>PAEC</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.amryHandle}>Amry</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.pafHandle}>PAF</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.enggHandle}>Navy</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.policeHandle}>Police</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.bankHandle}>Bank</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.wpdaHandle}>Karachi</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.teachHandle}>Lahore</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.IslamabadHandle}>Islamabad</Link>
          <Link className="navbar-brand custom-add" to="/job_category" onClick={this.moreHandle}>More</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">


            <ul className="navbar-nav ml-auto">
                
                <li className="nav-item">
                <Link onClick={this.removehandle} className="nav-link" to='/' >Log Out</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/login'>Login</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

const mapStateToprops = state => {
  return {
    get_job_category: state.addContentReducer.get_job_category
  }
}

export default connect(mapStateToprops, action)(Navbar);
