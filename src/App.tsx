import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { Landing } from './components/pages/Landing';
import { Contact } from './components/pages/Contact';
import { NavbarMain } from './components/NavbarMain';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { About } from './components/pages/About';
import { Contributing } from './components/pages/Contributing';
const RolesLazy = lazy(() => import('./components/pages/Roles'));
const ConstitutionLazy = lazy(() => import('./components/pages/Constitution'));
const MemoizedToastContainer = React.memo(ToastContainer);

// independent parsed resources on the network being lazily loaded
const Roles = () => (
  <Suspense fallback={<Container><div>Loading...</div></Container>}>
    <RolesLazy />
  </Suspense>
)

const Constitution = () => (
  <Suspense fallback={<Container><div>Loading...</div></Container>}>
    <ConstitutionLazy />
  </Suspense>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Notification Container*/}
      <MemoizedToastContainer />
      {/* Notification Container */}
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
