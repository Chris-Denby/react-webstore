import React from "react"
import './category-component.styles.scss'
import { Link } from "react-router-dom"

const Category = ({item})=>{
    return(
        <div className="category-container">
          <div className="background-image" style={{backgroundImage: `url(${item.imageUrl})`}}/>
            <div className="category-body-container">
              <h2>{item.title}</h2>
              <Link className="nav-link" to={`shop/${item.title}`}>Shop Now</Link>
            </div>
          </div>
    )
}

export default Category