import {React, useContext} from "react";
import Button from "../button/button-component";
import "../product-card/product-card-component.styles.scss"
import { CartContext } from "../contexts/cart-context";

const ProductCard = ({product}) => {

    const {addItemToCart } = useContext(CartContext)

    const addToCartHandler = ()=>{
        addItemToCart(product);
    }

    return(
        <div className="product-card-container">
            <img src={product.imageUrl} alt={product.name}/>
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button buttonType={"inverted"} onClick={addToCartHandler}>ADD TO CART</Button>
        </div>
    )
}

export default ProductCard