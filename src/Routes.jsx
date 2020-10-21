import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loading, Hero } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));

function Routes() {
  return (
    <Router>
      <Header />
      <Hero />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomeLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
