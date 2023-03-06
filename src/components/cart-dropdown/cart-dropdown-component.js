import {React, useContext} from "react";
import "../cart-dropdown/cart-dropdown-component.styles.scss"
import Button from "../button/button-component"
import { CartContext } from "../contexts/cart-context";
import CartItem from "../cart-item/cart-item-compnent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartDropdown = ()=> {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = ()=>{
        navigate('/checkout')
    }


    return(
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            {
                cartItems.map((item)=>{
                    return <CartItem key={item.id} item={item}/>
                })
            }
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown