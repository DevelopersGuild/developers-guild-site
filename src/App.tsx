import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Contributing } from "./pages/Contributing";
import Lab from "./pages/Lab";
import Constitution from "./pages/Constitution";
import Roles from "./pages/Roles";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/contributing" exact component={Contributing} />
        <Route path="/roles" exact component={Roles} />
        <Route path="/constitution" exact component={Constitution} />
        <Route path="/lab" exact component={Lab} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
