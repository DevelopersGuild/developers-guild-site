import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Contact } from './components/Contact';
import { NavbarMain } from './components/NavbarMain';
import { About } from './components/About';
import { Contributing } from './components/Contributing';
import Roles from './components/Roles';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Route exact path='/' component={Landing} />
      <Route exact path='contact' component={Contact} />
      <Route exact path='about' component={About} />
      <Route exact path='contributing' component={Contributing} />
      <Route exact path='roles' component={Roles} />
    </BrowserRouter>
  );
}

export default App;
