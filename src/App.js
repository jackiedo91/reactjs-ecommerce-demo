import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Styling
import './App.css';
// Custom components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// Third Parties
import { auth } from './firebase/firebase.utls';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/shop' component={ ShopPage }/>
          <Route exact path='/signin' component={ SignInAndSignUpPage }/>
        </Switch>
      </div>
    );
  }
}

export default App;
