import React from 'react';
import { BrowserRouter, HashRouter , Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Contact } from './components/Contact';
import { NavbarMain } from './components/NavbarMain';
import { About } from './components/About';
import { Contributing } from './components/Contributing';
import Roles from './components/Roles';

/**
 * Use Browser Router on Netlify 
 * and HashRouter on Github pages
 */

const App: React.FC = () => {
  return (
    <HashRouter>
      <NavbarMain />
      <Route exact path='/' component={Landing} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contributing' component={Contributing} />
      <Route exact path='/roles' component={Roles} />
    </HashRouter>
  );
}

export default App;
