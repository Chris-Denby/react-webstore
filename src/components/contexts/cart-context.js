import { createContext, useReducer } from "react";
 
const addCartItem = ({cartItems}, productToAdd)=> {
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

const removeCartItem = ({cartItems}, idToRemove)=> {
    return cartItems.filter(element=>element.id!==idToRemove);
}

const incrementCartItem = ({cartItems}, idToIncrement)=> {
    return cartItems.map((cartItem)=>{
        return (
            cartItem.id === idToIncrement 
            ? {...cartItem, quantity: cartItem.quantity+1} 
            :  cartItem );
    });
}

const decrementCartItem = ({cartItems}, idToDecrement)=> {
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

const toggleCartOpen = ({cartOpen})=> {
    return cartOpen ? false : true;
}

export const CART_ACTION_TYPES = {
    ADD_CART_ITEM: "ADD_CART_ITEM",
    REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
    INCREMENT_CART_ITEM: "INCREMENT_CART_ITEM",
    DECREMENT_CART_ITEM: "DECREMENT_CART_ITEM",
    TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN,"
}

const INITIAL_STATE = {
    cartItems: [],
    cartOpen: false,
}

const cartReducer = (state, action) =>{
    const {type, payload} = action;
   switch(type) {
    case CART_ACTION_TYPES.ADD_CART_ITEM:
    return {
        ...state,
        cartItems: addCartItem(state, payload),
    };
    case CART_ACTION_TYPES.REMOVE_CART_ITEM:
        return {
            ...state,
            cartItems: removeCartItem(state, payload),
        };
    case CART_ACTION_TYPES.INCREMENT_CART_ITEM:
        return {
            ...state,
            cartItems: incrementCartItem(state, payload),
        };
    case CART_ACTION_TYPES.DECREMENT_CART_ITEM:
        return {
            ...state,
            cartItems: decrementCartItem(state, payload),
        };
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
        return {
            ...state,
            cartOpen: toggleCartOpen(state),
        }
    default:
        throw new Error(`Unhandled type error ${type}`)    
   }
}

export const CartContext = createContext(
    {
        cartOpen: false,
        setCartOpen: () => null,
        cartItems: [],
        addItemToCart: ()=> null,
    }
);

export const CartProvider = ({children}) => {

    //useReducer takes in custome state logic and initial state
    //useReducer returns current state and a dispatch method
    //the dispatch method lets you update the state and trigger a re-render
    const [{cartItems, cartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const addItemToCart = (productToAdd) => {
        dispatch({
            type: CART_ACTION_TYPES.ADD_CART_ITEM,
            payload: productToAdd,
        })
    }

    const incrementItemInCart = (itemToIncrement)=>{
        dispatch({
            type: CART_ACTION_TYPES.INCREMENT_CART_ITEM,
            payload: itemToIncrement,
        })
    }

    const decrementItemInCart = (itemToDecrement)=>{
        dispatch({
            type: CART_ACTION_TYPES.DECREMENT_CART_ITEM,
            payload: itemToDecrement,
        })
    }

    const removeItemFromCart = (itemToRemove)=>{
        dispatch({
            type: CART_ACTION_TYPES.REMOVE_CART_ITEM,
            payload: itemToRemove,
        })
    }

    const setCartOpen = (isOpen) =>{
        dispatch({
            type: CART_ACTION_TYPES.TOGGLE_CART_OPEN,
            payload: isOpen,
        })
    }

    const value = {removeItemFromCart, incrementItemInCart, decrementItemInCart,addItemToCart, cartOpen, setCartOpen, cartItems};

    return <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
}