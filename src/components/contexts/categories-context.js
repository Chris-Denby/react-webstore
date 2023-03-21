import { createContext, useState, useEffect } from "react";
import {fetchAllCategories, fetchProductsByCategory} from "../../utils/back-end.utils"

//actual value to access
export const CategoriesContext = createContext();  

//a provider wrapper to render the child components
export const CategoriesProvider = ({children}) => {
    //set default value for categories to an array, otherwise map wont work
    const [categories, setCategories] = useState([]);

    const value = {categories, setCategories}

    useEffect(()=>{
        fetchAllCategories().then(result=>setCategories(result))
      },[]);
      

    return <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
}