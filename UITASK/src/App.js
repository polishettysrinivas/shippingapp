import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Loginlayout from './Layouts/Loginlayout';
import Mainlayout from './Layouts/Mainlayout';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Shipments from './Components/Shipments';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Loginlayout path="/login" component={Login} />
          <Mainlayout path="/dashboard" component={Dashboard} />
          <Mainlayout path="/shipments" component={Shipments} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userstate: state
  }
}
export default connect(mapStateToProps)(App)
