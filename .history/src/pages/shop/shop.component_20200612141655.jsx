import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/coContainer.jsx';
import { default as CollectionPage } from '../collection/collectionContainer.jsx';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route
      exact
      path={`${match.path}`}
      component={CollectionsOverviewContainer}
    />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
