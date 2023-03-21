import React from "react";
import { CartItemContainer, Image, ItemDetails, Name, Price } from "./cart-item-component.styles";

type CartItemProps = {
    item: any
}

const CartItem = ({item} : CartItemProps) : JSX.Element => {
    return(
        <CartItemContainer>
            <Image src={item.imageUrl} alt={item.name}/>
            <ItemDetails>
                <Name>{item.name}</Name>
                <Price>{item.quantity} x {item.price}</Price>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;