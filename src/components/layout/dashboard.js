import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
    selectContent,
    getContent
    // show_description
} from "../../actions/addContentAction"
const action = {
    selectContent,
    getContent
    // show_description
};


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {


        }
    }
    hndleOnchnge = (id) => {
        this.props.getContent(id);
       
    }
    componentDidMount() {
        this.props.selectContent()
    }

    render() {
        return (
            <div className="profiles">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className='picslist' style={{ margin: 0, padding: 0, padding_left: '2%', padding_right: '2%', list_style_type: 'none', width: '100%', height: 'auto', list_style: 'none' }}>
                                <li style={{ float: 'left', padding: '7px', margin: '3px', width: '70px', height: '80px', border_radius: '3px', background: '#efefef', box_shadow: '0 0 1px 0 rgba(0,0,0,.1)', line_height: '1.2em', text_align_last: 'center' }}>   <a ref=''>
                                    <img style={{ height: '50px', width: '50px' }} src="https://vulearning.com/logos/govtlogo.jpg" alt="Govt Jobs"></img>
                           GOVT  </a>
                                </li>
                                <li style={{ float: 'left', padding: '7px', margin: '3px', width: '70px', height: '80px', border_radius: '3px', background: '#efefef', box_shadow: '0 0 1px 0 rgba(0,0,0,.1)', line_height: '1.2em', text_align_last: 'center' }}>   <a ref=''>
                                    <img style={{ height: '50px', width: '50px' }} src="https://vulearning.com/logos/ntslogo.jpg" alt="Govt Jobs"></img>
                           NTS  </a>
                                </li>
                                <li style={{ float: 'left', padding: '7px', margin: '3px', width: '70px', height: '80px', border_radius: '3px', background: '#efefef', box_shadow: '0 0 1px 0 rgba(0,0,0,.1)', line_height: '1.2em', text_align_last: 'center' }}>   <a ref=''>
                                    <img style={{ height: '50px', width: '50px' }} src="https://vulearning.com/logos/fpsclogo.jpg" alt="Govt Jobs"></img>
                           FPSC  </a>
                                </li>
                                <li style={{ float: 'left', padding: '7px', margin: '3px', width: '70px', height: '80px', border_radius: '3px', background: '#efefef', box_shadow: '0 0 1px 0 rgba(0,0,0,.1)', line_height: '1.2em', text_align_last: 'center' }}>   <a ref=''>
                                    <img style={{ height: '50px', width: '50px' }} src="https://vulearning.com/logos/ppsclogo.jpg" alt="Govt Jobs"></img>
                           PPSC  </a>
                                </li>
                                
                                <li style={{ float: 'left', padding: '7px', margin: '3px', width: '70px', height: '80px', border_radius: '3px', background: '#efefef', box_shadow: '0 0 1px 0 rgba(0,0,0,.1)', line_height: '1.2em', text_align_last: 'center' }}>   <a ref=''>
                                    <img style={{ height: '50px', width: '50px' }} src="https://vulearning.com/logos/armylogo.jpg" alt="Govt Jobs"></img>
                           ARMY  </a>
                                </li>
                                <li style={{ float: 'left', padding: '7px', margin: '3px', width: '70px', height: '80px', border_radius: '3px', background: '#efefef', box_shadow: '0 0 1px 0 rgba(0,0,0,.1)', line_height: '1.2em', text_align_last: 'center' }}>   <a ref=''>
                                    <img style={{ height: '50px', width: '50px' }} src="https://vulearning.com/logos/paflogo.jpg" alt="Govt Jobs"></img>
                           PAF  </a>
                                </li>
                                <li style={{ float: 'left', padding: '7px', margin: '3px', width: '70px', height: '80px', border_radius: '3px', background: '#efefef', box_shadow: '0 0 1px 0 rgba(0,0,0,.1)', line_height: '1.2em', text_align_last: 'center' }}>   <a ref=''>
                                    <img style={{ height: '50px', width: '50px' }} src="https://vulearning.com/logos/navylogo.jpg" alt="Govt Jobs"></img>
                           NAVY  </a>
                                </li>
                                <li style={{ float: 'left', padding: '7px', margin: '3px', width: '70px', height: '80px', border_radius: '3px', background: '#efefef', box_shadow: '0 0 1px 0 rgba(0,0,0,.1)', line_height: '1.2em', text_align_last: 'center' }}>   <a ref=''>
                                    <img style={{ height: '50px', width: '50px' }} src="https://vulearning.com/logos/policelogo.jpg" alt="Govt Jobs"></img>
                           POLICE  </a>
                                </li>
                                <li style={{ float: 'left', padding: '7px', margin: '3px', width: '70px', height: '80px', border_radius: '3px', background: '#efefef', box_shadow: '0 0 1px 0 rgba(0,0,0,.1)', line_height: '1.2em', text_align_last: 'center' }}>   <a ref=''>
                                    <img style={{ height: '50px', width: '50px' }} src="https://vulearning.com/logos/ptslogo.jpg" alt="Govt Jobs"></img>
                           PTS  </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p className="lead text-center">Latest in Pakistan 2020 | Govt & Private Jobs in Pakistan Latest</p>

                            <div className='row'>
                                <div className='col-md-12'>

                                    <table class="table table-borderless">
                                        <h3> Jobs By City</h3>
                                        <tbody>
                                            <tr>
                                                <td> <a href="register">Punkab Jobs</a></td>
                                                <td> <a href="register">Sindh Jobs </a></td>
                                                <td><a href="register"> KPK Jobs </a></td>
                                            </tr>
                                            <tr>

                                                <td> <a href="register">Punkab Jobs</a></td>
                                                <td> <a href="register">Sindh Jobs </a></td>
                                                <td><a href="register"> KPK Jobs </a></td>
                                            </tr>
                                            <tr>
                                                <td> <a href="register">Punkab Jobs</a></td>
                                                <td> <a href="register">Sindh Jobs </a></td>
                                                <td><a href="register"> KPK Jobs </a></td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>


                            {this.props.content_array.map((item, i) =>
                                <div className="card card-body bg-light mb-3">
                                    <div className="row">
                                        <Link className="lead text-center" to={{pathname:`/detail/${item.cont_id}`}}  onClick={() => this.hndleOnchnge(item.cont_id)} > {item.content}</Link>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>


                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        content_array: state.addContentReducer.content_array
    };
};
export default connect(
    mapStateToProps,
    action
)(Dashboard);

