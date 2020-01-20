import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Style components
import { CollectionsOverviewContainer } from './collections-overview.styles';

// Custom component
import CollectionPreview from '../collection-preview/collection-preview.component';

// Redux actions
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'


const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);

