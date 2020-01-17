import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Style
import './collections-overview.styles.scss';

// Custom component
import CollectionPreview from '../collection-preview/collection-preview.component';

// Redux actions
import { selectShopCollections } from '../../redux/shop/shop.selector'


const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id}  {...otherCollectionProps} />
        ))
      }
    </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview);

