import React, { useContext } from 'react'
import './CartDropDown.scss'
import Button from '../button/button'
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/cart';
const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items' >
       { cartItems.map((item )=>( <CartItem key={item.id} CartItem={item}/>))}
      </div>
      <Button>checkout</Button>
    </div>
)};
  
  export default CartDropdown;