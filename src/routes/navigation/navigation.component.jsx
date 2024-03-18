import { Fragment,useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


import { selectCurrentUser } from "../../store/user/user-selector";
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.style";

import{ ReactComponent as CrwnLogo} from '../../asset/007 crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";





const Navigation=()=>{
   const currentUser = useSelector(selectCurrentUser);
   const {isCartOpen}=useContext(CartContext);
   


    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/home">
            <div><CrwnLogo className="logo"/></div>
            </LogoContainer>
         
            <NavLinks>
            <NavLink to="/shop" >
               SHOP
            </NavLink>
            {currentUser ? (
                  <NavLink as='span' onClick={signOutUser}>
                    SIGN OUT
                  </NavLink>
                 ):(   
                 <NavLink to="/auth" >
                  SIGN IN
               </NavLink>
               )}
           <CartIcon />
           </NavLinks>
         {isCartOpen && <CartDropdown/>}
        </NavigationContainer> 
        <Outlet />
        
      </Fragment>
    )
  }

  export default Navigation