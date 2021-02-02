import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getContent
} from "../../actions/addContentAction"
import { Link } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const action = {
    getContent
};
class Detailed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false,
            value: '',
            content_id: ''

        }
    }

    componentDidMount() {

        this.props.getContent(this.state.content_id)
    }

    componentWillMount() {
        const id = this.props.match.params.id
        this.setState({
            content_id: id
        })
    }
    render() {
        return (
            <section>
                <div className="profiles">
                    <div className="container">
                        <div className="row">
                                <div className='col-md-8' style={{  width: '100%', borderRadius:'1%',border:'3px solid #eceff5' }}>
                                    <p className="lead text-center">Latest in Pakistan 2020 | Govt & Private Jobs in Pakistan Latest</p>
                                    {this.props.content_array.map((item, key) =>
                                        <div className="card card-body bg-light mb-3">
                                            <div className="row">
                                                <Link className="lead text-center" to={{ pathname: `/detail/${item.cont_id}` }}> {item.content}</Link>
                                            </div>
                                        </div>
                                    )}
                                    <table class="table">
                                        <thead style={{backgroundColor:'#eceff5'}}>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Detail</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {this.props.content_array.map(item =>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Job Location</td>
                                                    <td>{item.job_location}</td>
                                                </tr>

                                            )}
                                            {this.props.content_array.map(item =>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Published Date</td>
                                                    <td>{item.published_date}</td>
                                                </tr>
                                            )}
                                            {this.props.content_array.map(item =>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Last Date To Apply</td>
                                                    <td>{item.last_date}</td>
                                                </tr>
                                            )}
                                            {this.props.content_array.map(item =>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>NewsPaper</td>
                                                    <td>{item.newsPaper}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>

                                    <div>
                                        {this.props.content_array.map(item =>
                                            <CopyToClipboard >
                                                <div dangerouslySetInnerHTML={{ __html: item.Description }} />
                                            </CopyToClipboard>

                                        )}
                                        <br />
                                        {this.props.content_array.map(item =>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Last Date To Apply</td>
                                                <td>{item.last_date}</td>
                                            </tr>
                                        )}
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div class="card">
                                        <div class="card-header">
                                            Featured
                                          </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Cras justo odio</li>
                                            <li class="list-group-item">Dapibus ac facilisis in</li>
                                            <li class="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                    </div>
                                    <div class="card mt-4">

                                        <div class="card-header">
                                            Featured
                                          </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Cras justo odio</li>
                                            <li class="list-group-item">Dapibus ac facilisis in</li>
                                            <li class="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                    </div>  

                                </div>
                        </div>
                    </div>
                </div>
            </section>
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
)(Detailed);

