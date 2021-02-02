import React, { Component } from "react";
class Detailed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false,
            value: '',
            content_id: ''

        }
    }

    render() {
        return (
            <section>
                <div className="container-fluid">
                    {/* <h4>Live Chat</h4> */}
                    <div className="row" style={{ padding: '60px' }}>
                        <div className='col-md-3'>
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Item #1
                                               </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit,
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Item #2
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit,
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div class="card">
                                <div class="card-header">
                                    Name
                                    </div>
                                <div class="card-body" style={{ height: '300px' }}>
                                    <h5 class="card-title">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>Special title treatment</h5>
                                </div>
                                {/* <i class="fa fa-plus" aria-hidden="true"></i> */}
                                <input className='form-control' type='input' placeholder='Type a Message' />


                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card">
                                <div class="card-body text-center">
                                    <img class="avatar rounded-circle" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg" alt="Bologna" style={{ width: '40%' }} />
                                    <h5 class="card-title">Robert Downey Jr.</h5>
                                    <table class="table">

                                        <tbody>
                                            <tr>

                                                <td >Email</td>
                                                <td>Tayyabchohan@gmail.com</td>
                                            </tr>
                                            <tr>

                                                <td>Role</td>
                                                <td>Global</td>
                                            </tr>
                                            <tr>

                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Detailed;

