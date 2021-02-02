import React, { Component } from "react";
import { connect } from "react-redux";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Flatpickr from "react-flatpickr";
import swal from "sweetalert";
import Select from "react-select";
import CKEditor from 'ckeditor4-react'
import "flatpickr/dist/themes/material_green.css";
import dateFormat from "dateformat";
import {
  GetAllContent,
  add_content,
  selectContent,
  delete_content,
  Update_content
} from "../../actions/addContentAction"
const action = {
  GetAllContent,
  add_content,
  selectContent,
  delete_content,
  Update_content
};

function actionFormatter(cell, row) {
  return (
    <div>

      <div>
        <button
          className="btn btn-primary btn-xs"
          title="Update"
          data-toggle="modal"
          data-target="#myModal"
          onClick={() => that.clickupdate(cell, row)}
        >
          Update
          </button>
          &nbsp;
          <button
          className="btn btn-danger btn-xs"
          title="Delete"
          onClick={() => that.click_delete(cell, row)}
        >
          Delete
          </button>
      </div>

    </div>
  );
}
var that = ''


class Log extends Component {
  constructor() {
    super()
    this.state = {
      addContent: '',
      location: '',
      publishedDate: '',
      LastDatetoApply: '',
      JobDescription: '',
      newspaperName: '',
      date1: '',
      date: '',
      selectObjcet: '',
      newspaperNameUpdate: '',
      addContentUpdate: '',
      locationUpdate: '',
      publishedDateUpdate: '',
      LastDatetoApplyUpdate: '',
      JobDescriptionUpdate: '',
      selectLocation: '',
      selectNewsPaper: '',
      coomissionObjcet: '',
      FederalGovt: '',
      SecurityForces: '',
      PublicSectorOrganizations: ''

    }
    that = this
  }

  click_delete = (cell, row) => {

    const id = row.cont_id

    swal({
      title: 'Warning',
      text: "Are you Sure To Delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.props.delete_content(id);
      } else {
      }
    });

  }


  clickupdate = (cell, row) => {
    this.setState({
      JobDescriptionUpdate: row.Description,
      addContentUpdate: row.content,
      cont_id: row.cont_id,
      locationUpdate: row.job_location,
      LastDatetoApplyUpdate: row.last_date,
      newspaperNameUpdate: row.newsPaper,
      publishedDateUpdate: row.published_date,
      selectObjcet: row.selectObject
    })
  }

  handleDrowpObject = (selectObjcet) => {
    this.setState({
      selectObjcet: selectObjcet
    })
  }
  handlecfedral = (FederalGovt) => {
    this.setState({
      FederalGovt: FederalGovt
    })
  }
  handlecommissionDrop = (coomissionObjcet) => {
    this.setState({
      coomissionObjcet: coomissionObjcet
    })
  }
  handlePublicSectorOrganizationsDrop = (PublicSectorOrganizations) => {
    this.setState({
      PublicSectorOrganizations: PublicSectorOrganizations
    })
  }
  handleSecurityForcesDrop = (SecurityForces) => {
    this.setState({
      SecurityForces: SecurityForces
    })
  }
  locationDropObject = (selectLocation) => {
    this.setState({
      selectLocation: selectLocation
    })
  }
  selectNewsPaperObject = (selectNewsPaper) => {
    this.setState({
      selectNewsPaper: selectNewsPaper
    })
  }
  onInputHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onEditorChange = e => {
    this.setState({
      JobDescription: e.editor.getData()
    });
  };
  onEditorChange_update = e => {
    this.setState({
      JobDescriptionUpdate: e.editor.getData()
    });
  };

  handleOnsubmitUpdate = (e) => {
    e.preventDefault();
    const data = {
      addContentUpdate: this.state.addContentUpdate,
      locationUpdate: this.state.locationUpdate,
      publishedDateUpdate: this.state.publishedDateUpdate,
      LastDatetoApplyUpdate: this.state.LastDatetoApplyUpdate,
      JobDescriptionUpdate: this.state.JobDescriptionUpdate,
      newspaperNameUpdate: this.state.newspaperNameUpdate,
      selectObjcet: this.state.selectObjcet.value,
      selectLocation: this.state.selectLocation.value,
      SecurityForces: this.state.SecurityForces.value,
      PublicSectorOrganizations: this.state.PublicSectorOrganizations.value,
      coomissionObjcet: this.state.coomissionObjcet.value,
      FederalGovt: this.state.FederalGovt.value,
    }
    this.props.Update_content(data)
  }
  handleOnsubmit = (e) => {
    e.preventDefault();
    const data = {
      addContent: this.state.addContent,
      location: this.state.location,
      publishedDate: dateFormat(this.state.publishedDate, "yyyy-mm-dd"),
      LastDatetoApply: dateFormat(this.state.LastDatetoApply, "yyyy-mm-dd"),
      JobDescription: this.state.JobDescription,
      newspaperName: this.state.newspaperName,
      selectObjcet: this.state.selectObjcet.value
    }
    this.props.add_content(data)
  }

  componentDidMount() {
    this.props.GetAllContent()
  }

  render() {
    const conditionDrop = [
      { label: 'Home', value: 'home' },
      { label: 'All Jobs', value: 'alljobs' },
      { label: 'Govt', value: 'govt' },
      { label: 'Nts', value: 'nts' },
      { label: 'Fpsc', value: 'fpsc' },
      { label: 'Ppsc', value: 'ppsc' },
      { label: 'Paec', value: 'paec' },
      { label: 'Army', value: 'army' },
      { label: 'Navy', value: 'navy' },
      { label: 'Paf', value: 'paf' },
      { label: 'Police', value: 'police' },
      { label: 'Karachi', value: 'karachi' },
      { label: 'Bank', value: 'bank' },
      { label: 'Lahore', value: 'lahore' },
      { label: 'Islamabad', value: 'islamabad' },
      { label: 'More', value: 'more' },

    ];
    const selectNewsPaperDrop = [
      { label: 'Jang', value: 'Jang' },
      { label: 'Express', value: 'Express' },
      { label: 'Dawn', value: 'Dawn' },
      { label: 'Nawa-e-waqt', value: 'Nawa-e-waqt' },
      { label: 'The News', value: 'TheNews' },
      { label: 'The Nation', value: 'TheNation' },
      { label: 'Not in Newspaper', value: 'NotinNewspaper' },
    ];
    const FederalGovtDrop = [
      { label: 'Atomic Energy', value: 'AtomicEnergy' },
      { label: 'NESCOM', value: 'NESCOM' },
      { label: 'FIA', value: 'FIA' },
      { label: 'ASF', value: 'ASF' },
      { label: 'SUPARCO', value: 'SUPARCO' },
      { label: 'FBR', value: 'FBR' },
      { label: 'WAPDA', value: 'WAPDA' },
      { label: 'CAA', value: 'CAA' },
      { label: 'SBP', value: 'SBP' },
      { label: 'POF', value: 'POF' },
      { label: 'OGDCL', value: 'OGDCL' },
      { label: 'PSO', value: 'PSO' },
      { label: 'PPL', value: 'PPL' },
      { label: 'NLC', value: 'NLC' },
      { label: 'HEC', value: 'HEC' },
      { label: 'SNGPL', value: 'SNGPL' },
      { label: 'ZTBL', value: 'ZTBL' },
      { label: 'NADRA', value: 'NADRA' },
      { label: 'NUST', value: 'NUST' },
      { label: 'Intelligence Bureau', value: 'Intelligence Bureau' },
      { label: 'Ministry of Defence', value: 'State Life Insurance' },
      { label: 'State Life Insurance', value: 'Ministry of Defence' },
    ];
    const SecurityForcesDrop = [
      { label: 'Pak Army', value: 'Pak Army' },
      { label: 'Pak Air Force (PAF)', value: 'Pak Air Force (PAF)' },
      { label: 'Pak Navy', value: 'Pak Navy' },
      { label: 'ASF', value: 'ASF' },
      { label: 'Rangers', value: 'Rangers' },
      { label: 'Police', value: 'Police' },
      { label: 'NH & MP', value: 'NH & MP' },
      { label: 'ICT Police', value: 'ICT Police' },
      { label: 'Punjab Police', value: 'Punjab Police' },
      { label: 'Sindh Police', value: 'Sindh Police' },
    ];
    const serviceCommisionDrop = [
      { label: 'FPSC', value: 'FPSC' },
      { label: 'PPSC', value: 'PPSC' },
      { label: 'SPSC', value: 'SPSC' },
      { label: 'KPPSC', value: 'KPPSC' },
      { label: 'BPSC', value: 'BPSC' },
      { label: 'AJKPSC', value: 'AJKPSC' },
      { label: 'NTS', value: 'NTS' },
      { label: 'PTS', value: 'PTS' },
      { label: 'OTS', value: 'OTS' },
      { label: 'CTS', value: 'CTS' },
    ];
    const PakistanGovernmentJobsDrop = [
      { label: 'Pak Government', value: 'Pak Government' },
      { label: 'Federal Government', value: 'Federal Government' },
      { label: 'Punjab Government', value: 'Punjab Government' },
      { label: 'Sindh Government', value: 'Sindh Government' },
      { label: 'kpk-government', value: 'kpk-government' },
      { label: 'Balochistan Government', value: 'Balochistan Government' },
      { label: 'AJK Government', value: 'AJK Government' },
      { label: 'GB Government', value: 'GB Government' },
    ];
    const PublicSectorOrganizationsDrop = [
      { label: 'Atomic Energy', value: 'Atomic Energy' },
      { label: 'NESCOM', value: 'NESCOM' },
      { label: 'FIA', value: 'FIA' },
      { label: 'ASF', value: 'ASF' },
      { label: 'SUPARCO', value: 'SUPARCO' },
      { label: 'KRL', value: 'KRL' },
      { label: 'WAPDA', value: 'WAPDA' },
      { label: 'FBR', value: 'FBR' },
      { label: 'CAA', value: 'CAA' },
      { label: 'SBP', value: 'SBP' },
      { label: 'POF', value: 'POF' },
      { label: 'OGDCL', value: 'OGDCL' },
      { label: 'PSO', value: 'PSO' },
      { label: 'PPL', value: 'PPL' },
      { label: 'NLC', value: 'NLC' },
      { label: 'FWO', value: 'FWO' },
      { label: 'HEC', value: 'HEC' },
      { label: 'SNGPL', value: 'SNGPL' },
      { label: 'ZTBL', value: 'ZTBL' },
      { label: 'NADRA', value: 'NADRA' },
      { label: 'NUST', value: 'NUST' },
      { label: 'Intelligence Bureau', value: 'Intelligence Bureau' },
      { label: 'Ministry of Defence', value: 'Ministry of Defence' },
      { label: 'State Life Insurance', value: 'State Life Insurance' },
    ];
    const locationDrop = [
      { label: 'Punjab', value: 'punjab' },
      { label: 'Sindh', value: 'sindh' },
      { label: 'KPK', value: 'kpk' },
      { label: 'Balochistan', value: 'Balochistan' },
      { label: 'AJK', value: 'ajk' },
      { label: 'Gilgit Baltistan', value: 'Gilgit Baltistan' },
      { label: 'Karachi', value: 'Karachi' },
      { label: 'Lahore', value: 'Lahore' },
      { label: 'Islamabad', value: 'Islamabad' },
      { label: 'Rawalpindi', value: 'Rawalpindi' },
      { label: 'Faisalabad', value: 'Faisalabad' },
      { label: 'Gujranwala', value: 'Gujranwala' },
      { label: 'Multan', value: 'Multan' },
      { label: 'Lahore', value: 'lahore' },
      { label: 'Gujrat', value: 'Gujrat' },
      { label: 'Hyderabad', value: 'Hyderabad' },
      { label: 'Bahawalpur', value: 'Bahawalpur' },
      { label: 'Sargodha', value: 'Sargodha' },
      { label: 'Sahiwal', value: 'Sahiwal' },
      { label: 'Okara', value: 'Okara' },
      { label: 'Sukkur', value: 'Sukkur' },
      { label: 'Sialkot', value: 'Sialkot' },
      { label: 'Peshawar', value: 'Peshawar' },
      { label: 'Quetta', value: 'Quetta' },

    ];
    const options = {
      page: 1, // which page you want to show as default
      sizePerPageList: [
        {
          text: "5",
          value: 5
        },
        {
          text: "10",
          value: 10
        },
        {
          text: "15",
          value: 15
        },
        {
          text: "20",
          value: 20
        },
        {
          text: "25",
          value: 25
        }
        //   {
        //     text: "All",
        //     value: barcodes_list.length //barcodes_list_length
        //   }
      ], // you can change the dropdown list for size per page
      sizePerPage: 10, // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 5, // the pagination bar size.
      prePage: "Prev", // Previous page button text
      nextPage: "Next", // Next page button text
      firstPage: "<<", // First page button text
      lastPage: ">>", // Last page button text
      prePageTitle: "Go to previous", // Previous page button title
      nextPageTitle: "Go to next", // Next page button title
      firstPageTitle: "Go to first", // First page button title
      lastPageTitle: "Go to Last", // Last page button title
      paginationShowsTotal: this.renderShowsTotal, // Accept bool or function
      paginationPosition: "both", // default is bottom, top and both is all available
      clearSearch: true
    };
    return (
      <React.Fragment>
        <section>
          <div className="profiles">
            <div className="container">

              <form
                onSubmit={this.handleOnsubmit}
              >
                <div className="row">
                  <div className="col-md-12">

                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                        Pakistan Government Jobs:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                    </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <Select
                            id="objectUpdateId"
                            name="PakistanGovernmentJobs"
                            options={PakistanGovernmentJobsDrop}
                            value={this.state.PakistanGovernmentJobs}
                            onChange={this.handlePakistanGovernmentJobsDrop}
                            className="basic-select"
                            classNamePrefix="select"
                            isSearchable
                            required

                          />
                        </div>
                      </div>
                    </div>

                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                        Federal Govt / Public Sector Organizations Jobs:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                    </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <Select
                            id="objectUpdateId"
                            name="PublicSectorOrganizations"
                            options={PublicSectorOrganizationsDrop}
                            value={this.state.PublicSectorOrganizations}
                            onChange={this.handlePublicSectorOrganizationsDrop}
                            className="basic-select"
                            classNamePrefix="select"
                            isSearchable
                            required

                          />
                        </div>
                      </div>
                    </div>
                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                        Pakistan Armed / Security Forces Jobs:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                    </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <Select
                            id="objectUpdateId"
                            name="SecurityForces"
                            options={SecurityForcesDrop}
                            value={this.state.SecurityForces}
                            onChange={this.handleSecurityForcesDrop}
                            className="basic-select"
                            classNamePrefix="select"
                            isSearchable
                            required

                          />
                        </div>
                      </div>
                    </div>

                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                        Federal Govt / Public Sector Organizations Jobs:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                    </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <Select
                            id="objectUpdateId"
                            name="FederalGovt"
                            options={FederalGovtDrop}
                            value={this.state.FederalGovt}
                            onChange={this.handlecfedral}
                            className="basic-select"
                            classNamePrefix="select"
                            isSearchable
                            required

                          />
                        </div>
                      </div>
                    </div>

                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                        Service Commission / Testing Organization Jobs:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                    </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <Select
                            id="objectUpdateId"
                            name="coomissionObjcet"
                            options={serviceCommisionDrop}
                            value={this.state.coomissionObjcet}
                            onChange={this.handlecommissionDrop}
                            className="basic-select"
                            classNamePrefix="select"
                            isSearchable
                            required

                          />
                        </div>
                      </div>
                    </div>
                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                        Job Category:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <Select
                            id="objectUpdateId"
                            name="selectObjcet"
                            options={conditionDrop}
                            value={this.state.selectObjcet}
                            onChange={this.handleDrowpObject}
                            className="basic-select"
                            classNamePrefix="select"
                            isSearchable
                            required

                          />
                        </div>
                      </div>
                    </div>
                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                        Job Location:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <Select
                            id="objectUpdateId"
                            name="selectLocation"
                            options={locationDrop}
                            value={this.state.selectLocation}
                            onChange={this.locationDropObject}
                            className="basic-select"
                            classNamePrefix="select"
                            isSearchable
                            required

                          />
                        </div>
                      </div>
                    </div>
                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                        NewsPaper Name:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <Select
                            id="objectUpdateId"
                            name="selectNewsPaper"
                            options={selectNewsPaperDrop}
                            value={this.state.selectNewsPaper}
                            onChange={this.selectNewsPaperObject}
                            className="basic-select"
                            classNamePrefix="select"
                            isSearchable
                            required

                          />
                        </div>
                      </div>
                    </div>
                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                        Add Content:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <input
                            className="form-control"
                            type="text"
                            name="addContent"
                            value={this.state.addContent}
                            onChange={this.onInputHandle}
                            placeholder="Add Content"
                            required
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div className="row pl-5 pr-5">
                      <label className="pl-3 pr-5">
                        {" "}
                       Job Location:{" "}
                        <span className="required" style={{ color: "red" }}>
                          *
                </span>{" "}
                      </label>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="form-group has-feedback">
                          <input
                            className="form-control"
                            type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.onInputHandle}
                            placeholder="Job Location"
                            required
                          ></input>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="row pl-5 pr-5">
                  <label className="pl-3 pr-5">
                    {" "}
                        Published Date:{" "}
                    <span className="required" style={{ color: "red" }}>
                      *
                </span>{" "}
                  </label>
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <div className="form-group has-feedback">
                      <Flatpickr
                        className="form-control"
                        required
                        options={{
                          minDate: "today",
                          dateFormat: "Y-m-d",
                          name: "publishedDate",
                        }}
                        value={this.state.publishedDate}
                        onChange={(publishedDate) => {
                          this.setState({ publishedDate });
                        }}
                      />

                    </div>
                  </div>
                </div>
                <div className="row pl-5 pr-5">
                  <label className="pl-3 pr-5">
                    {" "}
                    Last Date to Apply:{" "}
                    <span className="required" style={{ color: "red" }}>
                      *
                </span>{" "}
                  </label>
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <div className="form-group has-feedback">
                      <Flatpickr
                        className="form-control"
                        required
                        options={{
                          minDate: "today",
                          dateFormat: "Y-m-d",
                          name: "LastDatetoApply",
                        }}
                        value={this.state.LastDatetoApply}
                        onChange={(LastDatetoApply) => {
                          this.setState({ LastDatetoApply });
                        }}
                      />

                    </div>
                  </div>
                </div>
                <div className="row pl-5 pr-5">
                  <label className="pl-3 pr-5">
                    {" "}
                        NewsPaper Name:{" "}
                    <span className="required" style={{ color: "red" }}>
                      *
                </span>{" "}
                  </label>
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <div className="form-group has-feedback">
                      <input
                        className="form-control"
                        type="text"
                        name="newspaperName"
                        value={this.state.newspaperName}
                        onChange={this.onInputHandle}
                        placeholder="NewsPaper Name"
                        required
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="row pl-5 pr-5">
                  <label className="pl-3 pr-5">
                    {" "}
                        Job Description:{" "}
                    <span className="required" style={{ color: "red" }}>
                      *
                </span>{" "}
                  </label>
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <div className="form-group has-feedback">
                      <CKEditor
                        data={this.state.JobDescription}
                        onChange={this.onEditorChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12 col-lg-12">
                  <br />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", marginTop: "3px" }}
                  // value={this.props.show}
                  // data-dimdiss="modal"
                  // onClick={this.closeModel_resetState}
                  >
                    Save
                            </button>
                </div>

              </form>
            </div>
          </div>

        </section>

        <section>

          <div className="row">
            <div className="col-sm-12">
              <div className="box">
                <br />

                <div className="row">
                  <div className="col-sm-12">
                    <BootstrapTable
                      data={this.props.content_array || []}
                      pagination
                      search
                      options={options}
                    >
                      <TableHeaderColumn
                        width="11.11%"
                        export={false}
                        dataFormat={actionFormatter}
                        dataField="cont_id"
                      >
                        Action
                        </TableHeaderColumn>
                      <TableHeaderColumn
                        width="25.11%"
                        export={false}
                        dataField="content"
                      >
                        Content/Jobs
                        </TableHeaderColumn>

                      <TableHeaderColumn
                        width="11.11%"
                        isKey={true}
                        dataField="job_location"
                      >
                        Location
                        </TableHeaderColumn>
                      <TableHeaderColumn
                        width="11.11%"
                        dataField="published_date"
                      >
                        Published Date
                        </TableHeaderColumn>

                      <TableHeaderColumn
                        width="11.11%"
                        dataSort={true}
                        dataField="last_date"
                      >
                        Last Date {" "}
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        width="10.66%"
                        dataSort={true}
                        dataField="newsPaper"
                      >
                        NewsPaper
                        </TableHeaderColumn>
                      <TableHeaderColumn
                        width="11.11%"
                        dataSort={true}
                        dataField="selectObject"
                      >
                        Job Type
                        </TableHeaderColumn>

                    </BootstrapTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>


    );
  }
}
const mapStateToProps = state => {
  return {
    get_all_content: state.addContentReducer.get_all_content,
    content_array: state.addContentReducer.content_array
  };
};
export default connect(
  mapStateToProps,
  action
)(Log);

