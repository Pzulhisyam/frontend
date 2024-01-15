import './App.css';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import EmployeeComponent from './components/EmployeeComponent';
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import MemberComponent from './components/MemberComponent';

function App() {


  // console.log(clients);
  
  return (
    <div>
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path = '/members' component={MemberComponent}></Route>
            <Route path = '/employees' component={EmployeeComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
    // <EmployeeComponent />
    // <MemberComponent />
  );
}

export default App;
