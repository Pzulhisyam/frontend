import './App.css';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import MemberComponent from './components/MemberComponent';
import AddMemberComponent from './components/AddMemberComponent';
import EmployeeComponent from './components/EmployeeComponent';
import CallAnimation from './components/CallAnimation';

function App() {


  // console.log(clients);
  
  return (
    <div>
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path = '/members' component={MemberComponent}></Route>
            <Route path = '/employees' component={EmployeeComponent}></Route>
            <Route path = '/add-employee' component={AddMemberComponent}></Route>
            <Route path = '/edit-employee/:id' component={AddMemberComponent}></Route>
            <Route path = '/animated' component={CallAnimation}></Route>
          </Switch>
        </div>
      </Router>
    </div>
    // <div>
    // <CallAnimation /></div>
    // <MemberComponent />
  );
}

export default App;
