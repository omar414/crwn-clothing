import React from 'react'
import './CartDropDown.scss'
import Button from '../button/button'
const CartDropdown = () => (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>checkout</Button>
    </div>
  );
  
  export default CartDropdown;