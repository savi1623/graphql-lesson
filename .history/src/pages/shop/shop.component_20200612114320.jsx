import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/coContainer.jsx';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route
      exact
      path={`${match.path}`}
      component={CollectionsOverview}
      CollectionsOverviewContainer
    />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
