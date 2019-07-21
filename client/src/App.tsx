import React, { Fragment, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getPostsRequest } from './store/modules/shop/shopActions';
import { alexNameSelector } from './store/modules/shop/shopSelectors';
import './App.css';

const Routes = React.lazy(() => import('./routes/routes'));

interface IProps {
  name?: string;
  getPostsRequest: () => void;
}

const App: React.FC<IProps> = ({ name, getPostsRequest }) => {
  return (
    <Fragment>
      <h1>Cool {name} 1</h1>
      <button onClick={getPostsRequest}>req name</button>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default connect(
  (state) => ({
    name: alexNameSelector(state)
  }),
  { getPostsRequest }
)(App);
