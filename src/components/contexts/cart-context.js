import { createContext, useState } from "react";
 
const addCartItem = (cartItems, productToAdd)=> {        
    const existingCartItem = cartItems.find(item=>item.id===productToAdd.id);
    if(existingCartItem) {
        return cartItems.map((cartItem)=>{
            return (cartItem.id === productToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity+1} 
                : cartItem);
        })
    }
    else {
        return [...cartItems, {...productToAdd,quantity:1}];
    }
}

const removeCartItem = (cartItems, idToRemove)=> {
    return cartItems.filter(element=>element.id!==idToRemove);
}

const incrementCartItem = (cartItems, idToIncrement)=> {
    return cartItems.map((cartItem)=>{
        return (
            cartItem.id === idToIncrement 
            ? {...cartItem, quantity: cartItem.quantity+1} 
            :  cartItem );
    });
}

const decrementCartItem = (cartItems, idToDecrement)=> {
    return cartItems.map((cartItem)=>{
        if(cartItem.quantity===1){
            return cartItem
        }
        return (
            cartItem.id === idToDecrement 
            ? {...cartItem, quantity: cartItem.quantity-1}
            : cartItem
        )
    });
}

//actual value to access
export const CartContext = createContext(
    {
        cartOpen: false,
        setCartOpen: () => null,
        cartItems: [],
        addItemToCart: ()=> null,
    }
);

//a provider wrapper to render the child components
export const CartProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const incrementItemInCart = (itemToIncrement)=>{
        setCartItems(incrementCartItem(cartItems, itemToIncrement))
        // console.log(incrementCartItem(cartItems, itemToIncrement))
    }

    const decrementItemInCart = (itemToDecrement)=>{
        setCartItems(decrementCartItem(cartItems, itemToDecrement))
        // console.log(decrementCartItem(cartItems, itemToDecrement))
    }

    const removeItemFromCart = (itemToRemove)=>{
        setCartItems(removeCartItem(cartItems, itemToRemove))
        // console.log(removeCartItem(cartItems, itemToRemove))
    }

    const value = {removeItemFromCart, incrementItemInCart, decrementItemInCart,addItemToCart, cartOpen, setCartOpen, cartItems, setCartItems};

    return <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
}