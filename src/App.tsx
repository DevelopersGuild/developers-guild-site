import React from 'react';
import {  BrowserRouter, Route   } from 'react-router-dom';
import { Landing } from './components/Landing';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Landing} />
    </BrowserRouter>
  );
}

export default App;
