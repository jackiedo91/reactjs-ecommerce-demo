import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Custom components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
// Redux actions
import { selectShopCollections } from '../../redux/shop/shop.selector'


const ShopPage = ({ collections }) => (
  <div className='shop-page'>
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

export default connect(mapStateToProps)(ShopPage);
