import {React, useContext} from "react";
import { CategoriesContext } from "../../components/contexts/categories-context";
import ProductCard from "../../components/product-card/product-card-component";
import "./shop-component.styles.scss"

const Shop = ()=> {

    const {categories} = useContext(CategoriesContext)

    return(
            <div>
                <div className="products-container">
                    {categories.map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                        ))}
                </div>

            </div>
    )
}

export default Shop;