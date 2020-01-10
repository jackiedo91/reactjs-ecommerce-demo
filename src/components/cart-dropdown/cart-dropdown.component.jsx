import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Styling
import './cart-dropdown.styles.scss';

// Redux Actions
import { selectCartItems } from '../../redux/cart/cart.selector';

// Custom Component
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))
      }

    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
