import React from 'react';
// Styling
import './cart-dropdown.styles.scss';
// Custom Component
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
)

export default CartDropdown;
