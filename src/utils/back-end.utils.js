import SHOP_DATA from "../shop-data.json"


export const fetchAllCategories = async ()=>{
    return await fetch("http://localhost:8080/products/",{method:"GET"})
    .then(response => response.json())
    .catch((error)=>{
        console.log(error)
        // return SHOP_DATA
    })

}

export const fetchProductsByCategory = async (category)=>{
    return await fetch(`http://localhost:8080/products?category=${category}`,{method:"GET"})
    .then(response => response.json())
}

