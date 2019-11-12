import React from 'react';
import Landing from './components/landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch> 
          <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
