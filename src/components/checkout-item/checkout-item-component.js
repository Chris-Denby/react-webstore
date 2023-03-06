import {React, useContext} from "react";
import { CartContext } from "../contexts/cart-context";
import "../checkout-item/checkout-item.styles.scss"

const CheckoutItem = ({item})=> {

    const {name, price, quantity, id, imageUrl} = item;
    const {cartItems,incrementItemInCart, decrementItemInCart, removeItemFromCart} = useContext(CartContext);

    const incrementHandler = ()=> {
        incrementItemInCart(id)
    }

    const decrementHandler = ()=> {
        decrementItemInCart(id)
    }

    const deleteHandler = ()=> {
        removeItemFromCart(id)
    }

    return(
        <div className="checkout-item-container">

            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decrementHandler}>{"-"}</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={incrementHandler}>{"+"}</div> 
            </span>

            <span className="price">${price * quantity}</span>

            <div className="remove-button" onClick={deleteHandler}>X</div>
        </div>
    )
}

export default CheckoutItem;