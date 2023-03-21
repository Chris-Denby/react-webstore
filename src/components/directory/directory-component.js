import {React, useContext} from "react";
import { CategoriesContext } from "../contexts/categories-context";
import DirectoryItem from "../directory-item/directory-item-component.js";
import { DirectoryContainer } from "./directory-component.styles";

const Directory = ()=> {

  const {categories} = useContext(CategoriesContext)

    return(
      <DirectoryContainer>
        {categories.map((category)=>{
          return(
            <DirectoryItem item={category} key={category.id}></DirectoryItem>
          )   
        })}
      </DirectoryContainer>
    )
}

export default Directory