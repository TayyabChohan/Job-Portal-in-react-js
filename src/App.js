import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  BrowserRouter,
  withRouter,
  Redirect,
  Router
} from "react-router-dom";
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import dashboard from './components/layout/dashboard'
import Detailed from './components/layout/Detailed';
import Job_category from './components/layout/Job_category';
import Log from './components/admin/Log';
import test from './components/layout/test';
// import Login from './components/auth/login/Login';
// import SignUp from './components/auth/register/signUp';
 

function App() {
  return (
    <React.Fragment>
     
      <BrowserRouter>
      <Route  exact path="/test" component={test}/>
      {/* <Navbar/> */}
      {/* <Router history={history}> */}
      <Route  exact path="/" component={dashboard}/>
      <div  className='container'>
      <Route   path="/detail/:id" component={Detailed}/>
      <Route   path="/job_category" component={Job_category}/>
      <Route   path="/log" component={Log}/>
      {/* <Route   path="/login" component={Login}/> */}
      {/* <Route   path="/signup" component={SignUp}/> */}

      </div>
      {/* </Router> */}
      {/* <Footer/> */}
      </BrowserRouter>
     
    </React.Fragment>
    
  );
}

export default App;
