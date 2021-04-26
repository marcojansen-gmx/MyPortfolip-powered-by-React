import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import LinksPage from "./pages/LinksPage";
import ResumeePage from "./pages/ResumeePage";
import ProjectsPage from "./pages/ProjectsPage";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/MyResumee">
          <ResumeePage />
        </Route>
        <Route exact path="/MyProjects">
          <ProjectsPage />
        </Route>
        <Route exact path="/MyLinks">
          <LinksPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
