import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { Landing } from './components/Landing';
import { Contact } from './components/Contact';
import { NavbarMain } from './components/NavbarMain';
import { ToastContainer, toast } from 'react-toastify';
import { About } from './components/About';
import { Contributing } from './components/Contributing';
const RolesLazy = lazy(() => import('./components/Roles'));
const ConstitutionLazy = lazy(() => import('./components/Constitution'));
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


toast.configure();
toast("Wow so easy !");
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
