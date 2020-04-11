import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


// Third Parties
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utls';


// Custom components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Redux Actions
import { updateCollections } from '../../redux/shop/shop.actions';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections')

    //// Method 1: using firebase method with promises
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false });
    });

    //// Method 2: Using native fetch
    // fetch('https://firestore.googleapis.com/v1/projects/reactjs-crwn-demo/databases/(default)/collections', {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,POST,DELETE,HEAD,PUT,OPTIONS",
    //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    //   }})
    //   .then(response => response.json())
    //   .then(collections => console.log(collections))

    //// Method 3: Using firebase method
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   updateCollections(collectionsMap)
    //   this.setState({ loading: false });
    // })
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
