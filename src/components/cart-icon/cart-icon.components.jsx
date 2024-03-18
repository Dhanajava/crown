import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.style";

const CartIcon = () =>{
  console.log("CArtIcon")
 const{isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
 const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
 console.log("CArtIcon ended")

 return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
 )
}

export default CartIcon