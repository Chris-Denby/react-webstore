import {Fragment, React, useContext} from "react";
import CategoryPreview from "../../components/category-preview/category-preview-component";
import { CategoriesContext } from "../../components/contexts/categories-context";

const CategoriesPreview = ()=> {

    const {categories} = useContext(CategoriesContext);

    return(
        <Fragment>
            {categories.map((category)=>{
                return(
                    <CategoryPreview title={category.title} products={category.items} key={category.id}/>
                )
            })}
        </Fragment>
    )
}

export default CategoriesPreview;