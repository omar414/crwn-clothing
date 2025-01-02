import React, { useContext } from "react";
import "./CartDropDown.style.jsx";
import Button from "../button/button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";
import { CartDropDownContainer, CartItems, EmptyMessage } from "./CartDropDown.style.jsx";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const Navigate = useNavigate();

  const goToCheckOutHandler = () => {
    Navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} CartItem={item} />)
        ) : (
          <EmptyMessage>no product added</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
