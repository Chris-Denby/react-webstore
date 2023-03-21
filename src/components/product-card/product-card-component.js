import {React, useContext} from "react";
import { CartContext } from "../contexts/cart-context";
import { BUTTON_TYPE_CLASSES } from "../button/button-component";
import { ProductCardContainer, Image, Footer, Name, Price, CartButton} from "./product-card-component.styles";

const ProductCard = ({product}) => {

    const {addItemToCart} = useContext(CartContext)

    const addToCartHandler = ()=>{
        addItemToCart(product);
    }

    return(
        <ProductCardContainer>
            <Image src={product.imageUrl} alt={product.name}/>
            <Footer>
                <Name>{product.name}</Name>
                <Price className="price">{product.price}</Price>
            </Footer>
            <CartButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCartHandler}>ADD TO CART</CartButton>
        </ProductCardContainer>
    )
}

export default ProductCard