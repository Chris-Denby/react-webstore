import React from "react"
import { DirectoryItemContainer, DirectoryItemBodyContainer, NavLink, BackgroundImage } from "./directory-item-component.styles"

const DirectoryItem = ({item})=>{
    return(
        <DirectoryItemContainer>
          <BackgroundImage style={{backgroundImage: `url(${item.imageUrl})`}}/>
            <DirectoryItemBodyContainer>
              <h2>{item.title}</h2>
              <NavLink to={`shop/${item.title}`}>Shop Now</NavLink>
            </DirectoryItemBodyContainer>
          </DirectoryItemContainer>
    )
}

export default DirectoryItem