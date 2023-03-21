import styled from "styled-components";
import Button from "../button/button-component";

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 5px;
    overflow: hidden;
`

export const CartButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 230px;
  display: none;
  overflow: hidden;
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;

`

export const Price = styled.span`
`

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    overflow: hidden;

    &:hover {
      ${Name} {
        font-weight: bold;
      }
      ${Image} {
        opacity: 0.8;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      ${CartButton} {
        opacity: 0.85;
        display: flex;
        font-size: 16px;
      }
    }
`
  