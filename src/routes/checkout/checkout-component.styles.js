import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 80%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    column-gap: 0px;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
    text-transform: capitalize;
`

export const Total = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`
  