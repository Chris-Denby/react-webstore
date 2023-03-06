import { createContext, useState, useEffect } from "react";
 
//actual value to access
export const CategoriesContext = createContext(
    // {
    //     categories: [],
    //     setCategories: ()=> null
    // }
);  

//a provider wrapper to render the child components
export const CategoriesProvider = ({children}) => {
    //set default value for categories to an array, otherwise map wont work
    const [categories, setCategories] = useState([]);

    const value = {categories, setCategories}

    useEffect(()=>{
        fetch("http://localhost:8080/products/",{method:"GET"})
        .then(response => response.json())
        .then(response => setCategories(response))
      },[]);
      

    return <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
}