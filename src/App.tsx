import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Contact } from './components/Contact';
import { NavbarMain } from './components/NavbarMain';
import { About } from './components/About';
import { Contributing } from './components/Contributing';
import Roles from './components/Roles';
import Constitution from './components/Constitution';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Route path='/' exact component={Landing} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/about' exact component={About} />
      <Route path='/contributing' exact component={Contributing} />
      <Route path='/roles' exact component={Roles} />
      <Route path="/constitution" exact component={Constitution} />
    </BrowserRouter>
  );
}

export default App;
