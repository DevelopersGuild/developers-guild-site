import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Landing } from "./components/pages/Landing";
import { Contact } from "./components/pages/Contact";
import { NavbarMain } from "./components/ui/NavbarMain";
import { About } from "./components/pages/About";
import { Contributing } from "./components/pages/Contributing";
import { Thanks } from "./components/pages/Thanks";
import Constitution from "./components/pages/Constitution";
import Roles from "./components/pages/Roles";

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
