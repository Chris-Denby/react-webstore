import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  column-gap: 0px;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  padding-right: 15px;
`

export const Image = styled.img`
width: 50%;
height: 50%;
`

export const Label = styled.span`

`
export const QuantityContainer = styled.span`
  display:flex;
`
export const Arrow = styled.div`
  cursor: pointer;
`

export const Quantity = styled.span`
  margin 0 10px;
`

export const Value = styled.span`
  margin: 0 10px;
`

export const RemoveButton = styled.div`
  cursor: pointer;
`