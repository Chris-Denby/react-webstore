import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const { product } = useParams();
    const productTitle = product.charAt(0).toUpperCase() + product.substring(1,product.length);
    return(
        <div>
            <h1>{productTitle} displayed below</h1>
        </div>
    )
}

export default ProductPage