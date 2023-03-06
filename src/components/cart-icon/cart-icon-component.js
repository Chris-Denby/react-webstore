import "./cart-icon-component.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { CartContext } from "../contexts/cart-context"
import {React, useContext} from "react"

const CartIcon = ()=> {

    const {cartOpen, setCartOpen, cartItems } = useContext(CartContext);

    const toggleCartOpen = () => {
        setCartOpen(cartOpen ? false : true);
    }

    const countCartItems = ()=>{
        return cartItems.reduce(
            (total, item)=>{
                return total + item.quantity
        },0);
    }

    return(
        <div className="cart-icon-container" onClick={toggleCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{countCartItems()}</span>
        </div>
    )
}

export default CartIcon