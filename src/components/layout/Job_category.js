import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
    getContent,
    getJobCategory
    // show_description
} from "../../actions/addContentAction"
const action = {
    getContent,
    getJobCategory
};


class Job_category extends Component {
    constructor() {
        super()
        this.state = {


        }
    }
    hndleOnchnge = (id) => {
        this.props.getContent(id);
        // console.log(id)
        // this.props.show_description()
    }

    handlGovt = () => {
        const data = {
            job_cat: 'govt'
        }
        this.props.getJobCategory(data)
    }
    handlnts = () => {
        alert('ss')
        const data = {
            job_cat: 'nts'
        }
        this.props.getJobCategory(data)
    }
    handlfpsc = () => {
        const data = {
            job_cat: 'fpsc'
        }
        this.props.getJobCategory(data)
    }
    handlppsc = () => {
        const data = {
            job_cat: 'ppsc'
        }
        this.props.getJobCategory(data)
    }
    handlpeac = () => {
        const data = {
            job_cat: 'peac'
        }
        this.props.getJobCategory(data)
    }
    handlarmy = () => {
        const data = {
            job_cat: 'army'
        }
        this.props.getJobCategory(data)
    }
    handlnvy = () => {
        const data = {
            job_cat: 'navy'
        }
        this.props.getJobCategory(data)
    }

    render() {
        return (
            <div className="profiles">

                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'govt' ?
                                    <div>
                                        <h1>Government Jobs 2020 in Pakistan Latest</h1>

                                        <h2>Government Jobs 2020 in Pakistan | Govt Jobs Today Latest / New</h2>
                                        <p>
                                            Here you can find all<h6>Government Jobs 2020 in Pakistan</h6>  form
                                different Government Departments which are working in all
                                 Provinces of Pakistan such as from (Punjab, Sindh, KPK ,
                                  Balochistan, Gilgit Baltistan and Azad Jammu Kashmir (AJK)).
                                   We have collects Govt Jobs 2020 from various Pakistan leading
                                    newspapers and other sources and publishes all Jobs in Government
                                     2020 on single page for job seekers convenience. If you have
                                      required qualification then apply as soon as possible for
                                       Current & Upcoming Federal / Provincial Government Jobs
                                        of Pakistan 2020. These Latest Government in Pakistan are
                                        for Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Peshawar,
                                         Hyderabad, Multan, Gujranwala, Gujrat, Sargodha, Bahawalpur, Sukkur, Sialkot, DG Khan,
                                          Quetta and other cities. Jobs Pak Army Jobs in Pakistan, Federal
                                Government Jobs in Pakistan, Government Hospital Jobs,
                                 Government School / College / University Latest Jobs.
                                  Here below we have arranged all Govt Jobs 2020 in Pakistan.
                               </p>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'nts' ?
                                    <div>
                                        <h1>NTS Jobs 2020</h1>

                                        <h2>NTS Jobs 2020 in Pakistan www.nts.org.pk Apply Online Latest</h2>
                                        <p>
                                            National Testing Service abbreviated as NTS.
                                            It is one of Pakistan leading testing agency which conducts tests for different jobs in
                                            Government & Private sector organizations.
                                            Besides this it also conducts various test for admission in various
                                            universities (NAT, GAT etc). Applying procedure for Jobs is quite Simple.
                                            First of all download Application Form  & Deposit slip from official
                                            website www.nts.org.pk. After that deposit test fee in any online HBL, ABL, MCB or Meezan bank branch.
                                            and then send duly filled NTS Application Form
                                            & Deposit slip to National Testing Service Headquarter 1-E Street 46 Sector I-8/2 Islamabad.
                                            National Testing Service shortlists eligible candidates and then conducts a written MCQ's type Test.
                                            Within some days NTS announces results for tests which then organization uses these results
                                            as criteria for recruitment. Here we have enlisted all NTS Jobs 2020 in Pakistan on single page
                                            for our visitors convenience.

                                            All  these Latest Jobs / Career Opportunities are collected
                                            from www.nts.org.pk & major newspapers of Pakistan like Jang,
                                            Dawn, The News, Express etc. These Jobs are for Islamabad, Lahore,
                                            Karachi, Multan, Hyderabad, Peshawar, Quetta
                                            & other cities. Different Government & Private companies for Punjab,
                                            Sindh, KPK, Balochistan, Azad Jammu Kashmir, Gilgit Baltistan
                                            & FATA uses NTS services. Popular Jobs are Educators, Banks,
                                            Health Department, Government etc. We will guide you all details ,
                                            eligibility criteria, Last Date to Apply for NTS Jobs 2020,
                                            How to Apply,  Age limit, Educational Qualification,
                                            Advertised Posts/ Vacancies etc.
                               </p>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'fpsc' ?
                                    <div>
                                        <h1>FPSC Jobs 2020</h1>

                                        <h2>FPSC Jobs 2020  Apply Online www.fpsc.gov.pk | FPSC Jobs in Pakistan Latest</h2>
                                        <p>
                                            Federal Public Service Commission abbreviated as FPSC. It is a Federal Govt
                                            of Pakistan Department that is responsible for recruitment / Induction of
                                            Civil Servants & Various Federal Government Department Posts. It conducts
                                            Exams of Central Superior Services (CSS) every year. This Government of
                                            Pakistan testing Organization publishes its jobs almost on first
                                            week of every month via leading newspapers & on www.fpsc.gov.pk. It gives
                                            15 days time duration for applying against its jobs. Federal Public Service
                                            Commission Main Head Office is in Islamabad While Regional Office are in Lahore,
                                            Karachi, Peshawar, Quetta, Multan, Sukkur, DI Khan & Gilgit. For further details
                                            about upcoming & current / recent Federal Public Service Commission FPSC Jobs 2020,
                                            FPSC results, Test Syllabus, Test Date & Roll Number Slip you can also visit the official website www.fpsc.gov.pk.

                                            Here we will guide you about eligibility criteria, Applying Procedure, Vacancies
                                            details of FPSC Jobs 2020. These Jobs are for Islamabad/ Rawalpindi, Lahore, Karachi,
                                            Peshawar & other cities of Pakistan. These Federal public Service commission Islamabad Jobs
                                            Publish in Leading Newspapers in Pakistan like Daily Jang, Express, Dawn, The News & other Newspapers.
                                            We have enlisted all Federal Public Service Commission Jobs in here at one place for our viewer's convenience.
                               </p>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'ppsc' ?
                                    <div>
                                        <h1>PPSC Jobs 2020 in Pakistan Apply Online</h1>

                                        <h2>PPSC Jobs 2020 www.ppsc.gop.pk Apply Online Latest Advertisement</h2>
                                        <p> Punjab Public Service commission known as PPSC.
                                        It is leading testing and recruiting agency in Punjab Government institution.
                                        It always provide opportunities to talented and qualified individuals for civilian jobs under various
                                        departments in Lahore and others districts of Government of Punjab.
                                        This Government organization has established after the satisfactory
                                        performance of FPSC (Federal public Service Commission)  Here you will
                                        be able to view Apply Online, Test Schedule, age limit, last date, Consolidated advertisements,
                                        Applying procedure for these commission Jobs etc.Punjab Public Service Commission Lahore usually announces
                                        jobs from BPS-7 to BPS-18 and in Punjab Police, Education Department, Health Department, Agriculture Department and others.
                                        We also Let you know about PPSC Upcoming Jobs 2020, result date, and challan form. You can get newest advertisement
                                        with positions for Lahore, and many other cities of
                                        Punjab.You can get furthers details of current / Latest /
                                            New & upcoming jobs 2020 on the official website at www.ppsc.gop.pk. Below You will find all PPSC Jobs 2020.</p>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'army' ?
                                    <div>
                                        <h1>Pakistan Army Jobs 2020 Latest</h1>

                                        <h2>Join Pak Army Jobs 2020 www.joinpakarmy.gov.pk Jobs in Pak Army Apply Online Registrationt</h2>
                                        <p> Here we will provide all Pak Army Jobs 2020 for Civilians & Commission / Non Commission Induction. Pakistan Army
                                        is one of best armed forces of Pakistan and everyone wants to
                                        join & be part of Pak Army but only few of them gets selected because
                                        Pak Army looks for specific individuals which can perfectly fits in the Army environment.
                                        If you are one of those then you should be confident to apply for Pak Army jobs as soon as possible.
                                        The Pakistan Army consists of commissioned officers and non commissioned officers and it’s is divided
                                        into two branches which are Arms & Services. If you wanted to Join Pak Army 2020 through Commission /
                                        Non Commission Induction after doing Matriculation, Intermediate (FA, F.Sc), Bachelors (BS, BA, B.Sc, BCS)
                                        and Masters (MA, M.Sc and MBA) then apply by registering online at www.joinpakarmy.gov.pk. Besides
                                        that you can also join Pakistan army after middle and primary pass throgh different Pak Army Civilian
                                        Jobs 2020. You can be a part of Pakistan Army Jobs 2020 through different courses which are SSC
                                        (Short Service Commission), SPSCC (Special Purpose Short Service Commission), PMA Long
                                        Course, Graduate Course & Lady Cadet Course (LCC). So those who wanted to Join Pak Army
                                        after Middle, Matric, Intermediate,Graduation and Masters through Pakistan Army Civilian
                                        Jobs can also see all Pak Amry Civilian Jobs. While majority of Join Pak Army Jobs 2020 are
                                        for Soldier (Sipahi / Sepoy).

                                        Current / Latest / New Pakistan army Jobs 2020 is posted on Pakistan Army Official
                                        website www.joinpakarmy.gov.pk and many major newspapers of Pakistan and here on
                                        This page you will be able to know all details of Joining Pakistan army including
                                                    eligibility criteria, age limit, physical standards and other qualifications.</p>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'paf' ?
                                    <div>
                                        <h1>Pakistan Air Force (PAF) Jobs 2020 Latest</h1>

                                        <h2>Join PAF Jobs 2020 www.joinpaf.gov.pk Pakistan Air Force Apply Online Registration</h2>
                                        <p> Here you will be able to know all PAF Jobs 2020 in Pakistan.
                                        we will share complete information about latest commission officer
                                        Join Paf Jobs 2020. Jobs and career opportunities would be updated on daily basis.
                                        Pakistan Air Force offers Permanent Commission as GD Pilot, Engineering Cadets and
                                        in other trades, branches, Short service commission (SSC) and Special Purpose Short
                                        Service Commission is also offered in Admin branch, Education branch, Logistics branch,
                                        Accounts branch and as an Education Instructor or Religious Teacher .On Successful
                                        Completion of training rank as Lieutenant and pilot officer is awarded. Both male and
                                        females can join Pakistan Air Force,PAF After Intermediate (FA, F.SC )
                                        Bachelor's level (BA, BSC, B.E, BS, BCS) and Master's Level (MA, MSC, MBA, M.COM, MCS)
                                        qualification. You can also Apply Online at Pakistan Air Force official website
                                                at www.joinpaf.gov.pk.</p>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'navy' ?
                                    <div>
                                        <h1>Join Pak Navy Jobs 2020 Latest</h1>

                                        <h2>Join Pak Navy Jobs 2020 www.joinpaknavy.gov.pk Online Registration Latest</h2>
                                        <p> Here you can find all Latest Pakistan Navy Jobs 2020 Details &
                                        Advertisements.There are many induction in a year for Pak Navy like
                                        Pak Navy Sailor Jobs, Pak Navy PN Cadet Jobs, Pak Navy Short Service
                                        Commission (SPSCC & SCC ), Pak Navy Permanent Commission Jobs & Pak
                                        Civilian Jobs.The Educational Qualification for These Jobs are Middle,
                                        Matric,Intermediate (F.A / F.Sc) Bachelor's (B.A /B.Sc), Master's
                                        (M.A / M.Sc) and B.sc Engineering.These Jobs are For Islamabad & for Karachi.
                                        You can see all details of Pak Navy Jobs 2020 & Apply Online at Pakistan Navy
                                                  official website at www.joinpaknavy.gov.pk. Here below we have enlisted all Join Pak Navy Jobs 2020</p>

                                    </div>
                                    : '')}

                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'police' ?
                                    <div>
                                        <h1>Banking Jobs 2020</h1>

                                        <h2>Bank Jobs 2020 in Pakistan Latest Apply Online - Banking Jobs 2020</h2>
                                        <p> Here we update Bank Jobs 2020 in Pakistan Latest.
                                        There are various Private and Government Banks operating in Pakistan.
                                        Government & Private Limited Banks lists as Habib Bank Limited (HBL),
                                        United Bank limited (UBL), Muslim Commercial Bank (MCB), State Bank of
                                        Pakistan (SBP), The Bank of Khyber (BOK), Allied Bank Limited (ABL),
                                        Askari Bank Limited, Zarai Taraqiati Bank Limited (ZTBL), Bank of Punjab
                                        (BOP) and National Bank Pakistan (NBP), Meezan Bank, Faysal Bank, Bank Alfalah,
                                        Bank Islami Pakistan.
                                        These Bank Jobs are collected through various Newspapers
                                        & Other sources for KPK, Punjab, Balochistan, Sindh, FATA,
                                        Gilgit Baltistan And Azad Jammu & Kashmir and cities including
                                        Islamabad, Karachi, Lahore, Rawalpindi, Peshawar, Multan, Quetta, Faisalabad.

                                        Latest Jobs in Pakistan banks are often as cashiers, tellers,
                                        Agriculture Credit Officers, Customer Support Officers, Business
                                                Development Officers, Branch managers & Relationship Managers for Trainee & Experienced Positions.</p>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'bank' ?
                                    <div>
                                        <h1>Banking Jobs 2020</h1>

                                        <h2>Bank Jobs 2020 in Pakistan Latest Apply Online - Banking Jobs 2020</h2>
                                        <p> Here we update Bank Jobs 2020 in Pakistan Latest. There are various Private and Government Banks operating in Pakistan. Government & Private Limited Banks lists as Habib Bank Limited (HBL), United Bank limited (UBL), Muslim Commercial Bank (MCB), State Bank of Pakistan (SBP), The Bank of Khyber (BOK), Allied Bank Limited (ABL), Askari Bank Limited, Zarai Taraqiati Bank Limited (ZTBL), Bank of Punjab (BOP) and National Bank Pakistan (NBP), Meezan Bank, Faysal Bank, Bank Alfalah, Bank Islami Pakistan.
                                        These Bank Jobs are collected through various Newspapers &
                                        Other sources for KPK, Punjab, Balochistan, Sindh, FATA,
                                        Gilgit Baltistan And Azad Jammu & Kashmir and cities including Islamabad, Karachi,
                                        Lahore, Rawalpindi, Peshawar, Multan, Quetta, Faisalabad.

                                        Latest Jobs in Pakistan banks are often as cashiers, tellers,
                                        Agriculture Credit Officers, Customer Support Officers, Business Development Officers,
                                            Branch managers & Relationship Managers for Trainee & Experienced Positions.</p>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'karachi' ?
                                    <div>
                                        <h1>Karachi Jobs 2020</h1>

                                        <h2>Karachi Jobs 2020 Latest | Jobs in Karachi 2020 | Latest Jobs in Karachi</h2>
                                        <p> Here you will be able to know and apply all Jobs in Karachi and surrounding areas
                                        of karachi City. we will enlist all Government Jobs in Karachi, Bank Jobs,Karachi
                                        Police Jobs (Constables & Others) ,Engineering Jobs, IT and Telecom Companies Jobs
                                        and other Departments of Sindh career Opportunities.These Jobs are taken from Leading
                                        newspapers on Pakistan like
                                             Express,Dawn, Jang & Other sources. Here below is the list of all Karachi Jobs 2020.</p>
                                        <h3>Jobs in Karachi 2020 Latest | Karachi Jobs 2020 | Latest Jobs in Karachi Apply Now</h3>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'lahore' ?
                                    <div>
                                        <h1>Lahore Jobs 2020</h1>

                                        <h2>Lahore Jobs 2020 - Latest Jobs in Lahore 2020 | Jobs in Lahore Latest</h2>
                                        <p> Here you will be able to know and apply all Jobs in Lahore and surrounding areas of Lahore City.
                                        we will enlist all Government Jobs in Lahore, Bank Jobs, Lahore Police Jobs (Constables & Others)
                                        ,Engineering Jobs, IT and Telecom Companies Jobs and other Departments of Punjab career Opportunities.
                                        These Jobs are taken from Leading newspapers on Pakistan like  Express,Dawn, Jang & Other sources.
                                             Here below is the list of all Lahore Jobs 2020.</p>
                                        <h3>Jobs in Lahore 2020 Latest Vacancies | Lahore Jobs 2020 Apply No</h3>

                                    </div>
                                    : '')}
                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'islamabad' ?
                                    <div>
                                        <h1>Islamabad Jobs 2020</h1>

                                        <h2>Islamabad Jobs 2020 Latest | Jobs in Islamabad 2020 | Latest Jobs in Islamabad</h2>
                                        <p>Find all Islamabad Jobs 2020 according to your educational qualification & skill.
                                        You can Find all  Government Jobs in Islamabad, Bank Jobs, Islamabad Police Jobs
                                        (constables & others), Engineering Jobs, IT and Telecom companies Jobs and other departments of Federal
                                        Government career opportunities.These Jobs are taken from leading newspapers on Pakistan like  Express,Dawn,
                                        Jang & Other sources.
                                             Here Below we have enlisted all Jobs in Islamabad 2020 on one single page.</p>
                                        <h3>Jobs in Islamabad 2020 Latest | Islamabad Jobs 2020 | Latest Jobs in Islamabad Apply Now</h3>

                                    </div>
                                    : '')}

                            {this.props.get_job_category.map((item) =>
                                item.selectObject === 'more' ?
                                    <div>
                                        <h1>Vulearning Jobs in Pakistan 2020 | Latest Pakistan Jobs 2020 Today</h1>

                                        <h2>Islamabad Jobs 2020 Latest | Jobs in Islamabad 2020 | Latest Jobs in Islamabad</h2>
                                        <p>www vulearning com provides Latest Private / Governemnt Jobs in Pakistan
                                        2020 You can also Search Vulearning Jobs 2020 by Organization, City, Date,
                                        Province Newspaper type to get online jobs in pakistan. These Jobs in Pakistan
                                        2020 Latest are for Karachi, Lahore, Rawalpindi, Islamabad, Peshawar. Quetta, Multan, Faisalabad,
                                        Gujranwala, Sargodha, Hyderabad & Other Cities of Pakistan published in Jang, Express, Nawa i Waqt,
                                        The News, Dawn, The Nation, Mashriq/Aaj, Dunya. Khabrain Newspapers & Other Sources. Popular Latest Pakistan Jobs 2020 are Federal Government Jobs in Pakistan 2020, Punjab Govt Jobs, Sindh Govt Jobs, KPK Govt Jobs, Pakistan Army Jobs, Police Jobs, NTS Jobs, FPSC Jobs , PPSC Jobs,
                                             Banks Jobs at vulearning 2020 etc.</p>
                                        <h3>Vulearning Jobs in Pakistan 2020 | Latest Pakistan Jobs Govt / Private 2020</h3>

                                    </div>
                                    : '')}
                            {this.props.all === 'josbs' ?

                                <div>
                                    <h1>ALL JOBS</h1>

                                    <h2>Islamabad Jobs 2020 Latest | Jobs in Islamabad 2020 | Latest Jobs in Islamabad</h2>
                                    <p>www vulearning com provides Latest Private / Governemnt Jobs in Pakistan
                                    2020 You can also Search Vulearning Jobs 2020 by Organization, City, Date,
                                    Province Newspaper type to get online jobs in pakistan. These Jobs in Pakistan
                                    2020 Latest are for Karachi, Lahore, Rawalpindi, Islamabad, Peshawar. Quetta, Multan, Faisalabad,
                                    Gujranwala, Sargodha, Hyderabad & Other Cities of Pakistan published in Jang, Express, Nawa i Waqt,
                                    The News, Dawn, The Nation, Mashriq/Aaj, Dunya. Khabrain Newspapers & Other Sources. Popular Latest Pakistan Jobs 2020 are Federal Government Jobs in Pakistan 2020, Punjab Govt Jobs, Sindh Govt Jobs, KPK Govt Jobs, Pakistan Army Jobs, Police Jobs, NTS Jobs, FPSC Jobs , PPSC Jobs,
                                             Banks Jobs at vulearning 2020 etc.</p>
                                    <h3>Vulearning Jobs in Pakistan 2020 | Latest Pakistan Jobs Govt / Private 2020</h3>

                                </div>
                                : ''}
                            <div className='row'>
                                <div className='col-md-12'>
                                    <button className='btn btn-success' onClick={this.handlGovt}>GOVT </button>&nbsp;&nbsp;
                                         <button className='btn btn-success' onClick={this.handlnts}>NTS </button>&nbsp;&nbsp;
                                         <button className='btn btn-success' onClick={this.handlfpsc}>FPSC </button>&nbsp;&nbsp;
                                         <button className='btn btn-success' onClick={this.handlppsc}>PPSC </button>&nbsp;&nbsp;
                                         <button className='btn btn-success' onClick={this.handlpeac}>PAEC </button>&nbsp;&nbsp;
                                         <button className='btn btn-success' onClick={this.handlarmy}>ARMY </button>&nbsp;&nbsp;
                                         <button className='btn btn-success' onClick={this.handlnvy}>NAVY </button>&nbsp;&nbsp;
                                     </div>
                            </div>

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

                            {this.props.get_job_category.map((item, i) =>
                                <div className="card card-body bg-light mb-3">
                                    <div className="row">
                                        <Link className="lead text-center" onClick={() => this.hndleOnchnge(item.cont_id)} to="/detail"> {item.content}</Link>
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
        get_job_category: state.addContentReducer.get_job_category,
        all: state.addContentReducer.all
    };
};
export default connect(
    mapStateToProps,
    action
)(Job_category);

