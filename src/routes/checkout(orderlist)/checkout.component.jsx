import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context";


import "./checkout.style.scss"

const CheckOut =()=>{
    const {cartItems,addItemToCart}=useContext(CartContext)
    return(
        <div>
           {cartItems.map((cartItem)=>{
            const {id, name, quantity}=cartItem;
            return(
                <div key={id}>
                 <h2>{name}</h2>
                 <span>{quantity}</span>
                 <p>
                 <span>decrement</span></p>
                 <span onClick={()=>addItemToCart(cartItem)}>increment</span>
                </div>
            );
           })}
        </div>
    )
}

export default CheckOut