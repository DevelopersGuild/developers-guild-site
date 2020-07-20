import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing } from "./components/pages/Landing";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { Contributing } from "./components/pages/Contributing";
import { Thanks } from "./components/pages/Thanks";
import Lab from "./components/pages/Lab";
import Constitution from "./components/pages/Constitution";
import Roles from "./components/pages/Roles";
import Code from "./components/pages/Code/Code";
import CodeDetailView from "./components/pages/Code/CodeDetailView";
import NewCodeBlock from "./components/pages/Code/NewCodeBlock";
import Lms from "./lms/pages/Lms";
import sitedata from "./sitedata";
import { Helmet } from "react-helmet";
import ogimagepath from "./components/graphic-assets/og.jpg";

const App: React.FC = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{sitedata.title}</title>
        <link rel="canonical" href={sitedata.url} />
        <meta name="description" content={sitedata.description}></meta>
        <meta
          property="og:image"
          content={`https://da-developers.dev${ogimagepath}`}
        />
        <meta property="og:description" content={sitedata.description} />
        <meta property="og:title" content={sitedata.title} />
        <meta property="og:type" content="website" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/contributing" exact component={Contributing} />
          <Route path="/roles" exact component={Roles} />
          <Route path="/constitution" exact component={Constitution} />
          <Route path="/thanks" exact component={Thanks} />
          <Route path="/lab" exact component={Lab} />
          <Route path="/code" exact component={Code} />
          <Route path="/code/new" exact component={NewCodeBlock} />
          <Route path="/code/:hash" exact component={CodeDetailView} />
          {/* Coptic Routes */}
          <Route path="/coptic" exact component={Lms} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
