import React from 'react';
import { Route,Switch, Link } from 'react-router-dom';
import Login from './screens/login/Login';
import Dashboard from './screens/dashboard/Dashboard';

function App(props) {
  return (
    <div style={{width:'100%',height:'100%',position:'absolute'}}>
      

      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;