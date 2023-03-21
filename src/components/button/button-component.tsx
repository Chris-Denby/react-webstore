import React from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles";

interface ButtonProps {
    children?: JSX.Element,
    buttonType?: string,
    otherProps?: any,
    onClick?: ()=> void
}

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted ='inverted'
}

const getButton = (buttonType :string = BUTTON_TYPE_CLASSES.base) =>(
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]
)

const Button = ({children,buttonType, ...otherProps}: ButtonProps) : JSX.Element=> {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
        )
}

export default Button;

