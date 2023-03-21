import {React, useContext, useEffect, useState} from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item-component";
import { CartContext } from "../../components/contexts/cart-context";
import { Total, HeaderBlock, CheckoutContainer, CheckoutHeader } from "./checkout-component.styles";
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
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Image</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((item)=>(
                 <CheckoutItem key={item.id} item={item}/>
            ))}
            {/* iterate through list to build checkout items */}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout