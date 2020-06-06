import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Landing } from "./components/pages/Landing";
import { Contact } from "./components/pages/Contact";
import { NavbarMain } from "./components/ui/NavbarMain";
import { About } from "./components/pages/About";
import { Contributing } from "./components/pages/Contributing";
import { Thanks } from "./components/pages/Thanks";
import Constitution from "./components/pages/Constitution";
const RolesLazy = lazy(() => import("./components/pages/Roles"));

// independent parsed resources on the network being lazily loaded
const Roles = () => (
  <Suspense
    fallback={
      <Container>
        <div>Loading...</div>
      </Container>
    }
  >
    <RolesLazy />
  </Suspense>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Route path="/" exact component={Landing} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/about" exact component={About} />
      <Route path="/contributing" exact component={Contributing} />
      <Route path="/roles" exact component={Roles} />
      <Route path="/constitution" exact component={Constitution} />
      <Route path="/thanks" exact component={Thanks} />
    </BrowserRouter>
  );
};

export default App;
