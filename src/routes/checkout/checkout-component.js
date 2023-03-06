import {React, useContext, useEffect, useState} from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item-component";
import { CartContext } from "../../components/contexts/cart-context";
import "../checkout/checkout-component.styles.scss"

const Checkout = ()=> {

    const [cartTotal, setCartTotal] = useState(0);
    const {cartItems} = useContext(CartContext);

    const getCartTotal = ()=>{
        return cartItems.reduce(
            (total, item)=>{
                return total + (item.quantity * item.price)
        },0);
    }

    useEffect(()=>{
        setCartTotal(getCartTotal())
    },[cartItems])

    
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>
            {cartItems.map((item)=>(
                 <CheckoutItem key={item.id} item={item}/>
            ))}
            {/* iterate through list to build checkout items */}
            <span className="total">Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout