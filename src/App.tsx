import React from 'react';
import Landing from './components/landing';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
