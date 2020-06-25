import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Patients from './components/Patients/Patients';
import SignUp from './components/SignUp/SignUp';


const App = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
    </div>
  );
}

export default App;
