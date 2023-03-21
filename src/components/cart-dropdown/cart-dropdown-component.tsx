import {React, useContext} from "react";
import Button from "../button/button-component"
import { CartContext } from "../contexts/cart-context";
import CartItem from "../cart-item/cart-item-compnent";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { CartDropdownContainer, CartItemsContainer } from "./cart-dropdown-component.styles";

const CartDropdown = () : JSX.Element =>{

    const {cartItems} : React.FC = useContext(CartContext);
    const navigate : NavigateFunction = useNavigate();

    const goToCheckoutHandler = () : void =>{
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer>
            <Button onClick={goToCheckoutHandler}><span>CHECKOUT</span></Button>
            <CartItemsContainer>
            {
                cartItems.map(( item : React.FC )=>{
                    return <CartItem key={item.id} item={item}/>
                })
            }
            </CartItemsContainer>
        </CartDropdownContainer>
    )
}

export default CartDropdown