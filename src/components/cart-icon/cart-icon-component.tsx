import { CartContext } from "../contexts/cart-context"
import { useContext} from "react"
import React from "react"
import { CartIconContainer, Icon, ItemsCount } from "./cart-icon-component.styles"
import CartItem from "../cart-item/cart-item-compnent"

const CartIcon = () : JSX.Element => {

    type itemType = {

    }

    type cartItemType = {
        cartOpen: boolean,
        setCartOpen: ()=> void,
        cartItems: itemType[],
    }

    const {cartOpen, setCartOpen, cartItems } = useContext(CartContext);

    const toggleCartOpen = () : void => {
        setCartOpen(cartOpen ? false : true);
    }

    const countCartItems = () : number =>{
        return cartItems.reduce(
            (total: number, item)=>{
                return total + item.quantity
        },0);
    }

    return(
        <CartIconContainer onClick={toggleCartOpen}>
            <Icon/>
            <ItemsCount>{countCartItems()}</ItemsCount>
        </CartIconContainer>
    )
}

export default CartIcon