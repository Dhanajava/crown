import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import { selectCartItems } from "../../store/cart/cart-selector";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.components"

import {
   CartDropdownContainer,
   EmptyMessage, 
   CartItems } from "./cart-dropdown";

const CartDropdown = () =>{
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout")
  }


    return(
      <CartDropdownContainer>
          <CartItems>
            {
              cartItems.length ? (cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>))
                ) : (
                  <EmptyMessage>Your Cart Is Empty</EmptyMessage>
                )}
          </CartItems>
          <Button buttonType="inverted" onClick={goToCheckOutHandler}>Go To Checkout</Button>
          </CartDropdownContainer>
    )
}

export default CartDropdown

