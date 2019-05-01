import React from 'react';
import './App.css';
import Review from './components/review'
import Billing from './components/billing'
import Confirm from './components/confirm'
import { Redirect, Switch, Route } from 'react-router-dom'

function App() {
  return (
  <div className="height-transfer">
    <Switch>
      <Route exact path="/review" component={Review}/>
      <Route exact path="/billing" component={Billing}/>
      <Route exact path="/confirm" component={Confirm}/>
      <Redirect to="/review" component={Review}/> 
    </Switch>
  </div>
  );
}

export default App;
