import React, {Suspense} from 'react';
import {HashRouter as Router} from 'react-router-dom'
import {Loaders} from "./Loaders/Loaders"
import {useRoutes} from "../routes";

const App = () => {
  const routes = useRoutes()

  return (
      <Suspense fallback={<Loaders/>}>
        <Router basename='/'>
          {routes}
        </Router>
      </Suspense>
  );
}

export default App;
