import {React, useContext} from "react";
import { CartContext } from "../contexts/cart-context";
import { CheckoutItemContainer, ImageContainer, Label, Arrow, QuantityContainer, RemoveButton, Image, Quantity } from "./checkout-item.styles";


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
        <CheckoutItemContainer>

            <ImageContainer>
                <Image src={imageUrl} alt={name}/>
            </ImageContainer>

            <Label>{name}</Label>

            <QuantityContainer>
                <Arrow onClick={decrementHandler}>{"-"}</Arrow>
                <Quantity>{quantity}</Quantity>
                <Arrow onClick={incrementHandler}>{"+"}</Arrow> 
            </QuantityContainer>

            <Label>${price * quantity}</Label>

            <RemoveButton onClick={deleteHandler}>X</RemoveButton>

        </CheckoutItemContainer>
    )
}

export default CheckoutItem;