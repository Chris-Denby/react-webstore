import {React, useContext, useEffect} from "react";
import Category from '../categories/category-component'
import './directory-component.styles.scss'
import { CategoriesContext } from "../contexts/categories-context";

const Directory = ()=> {

  const {categories} = useContext(CategoriesContext)

  useEffect(()=>{
    console.log(categories)
  },[categories]);

    return(
      <div className="directory-container">
        {categories.map((category)=>{
          return(
            <Category item={category} key={category.id}></Category>
          )   
        })}
      </div>
    )
}

export default Directory