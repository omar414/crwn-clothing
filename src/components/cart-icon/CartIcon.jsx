import React from 'react'
import './CartIcon.style.jsx'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.style.jsx'
const CartIcon = () => {
    const {isCartOpen ,setIsCartOpen,cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconContainer onClick={ toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon