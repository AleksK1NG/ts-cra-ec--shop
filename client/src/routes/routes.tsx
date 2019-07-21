import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
