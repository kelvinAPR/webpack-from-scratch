import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}
