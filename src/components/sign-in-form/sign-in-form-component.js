import {React, useState} from "react";
import { signInWithGooglePopup, signInAuthUserFromForm } from "../../utils/firebase/firebase.utils";
import InputComponent from "../form-input/form-input-component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button-component";
import { ButtonsContainer, SignInContainer } from "./sign-in-form-component.styles";

const defaultFormState = {
    email: '',
    password: '',
}

const SignInForm = ()=> {
    const [formFields, setFormFields] = useState(defaultFormState);
    const {email, password} = formFields;

    const handleInputChange = (event)=> {
        const { name, value } = event.target;
        setFormFields(
            {
                ...formFields, 
                [name]:value
            }
        );
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()

        if(!email || !password) return;
        try {
            const { user } = await signInAuthUserFromForm(email,password)
            setFormFields(defaultFormState);
            //set user to context state
        } catch (error) {
            if(error.code === "auth/wrong-password" || "auth/user-not-found") {
                alert("Incorrect email or password provided")
            } else {
                alert("An error occured")
            }
        }
    }

    const signInWithGoogle = async ()=> {
        await signInWithGooglePopup();
    }
    
    return(
        <SignInContainer>
            <h2>Already registered?</h2>
            <span>Sign in with email and password</span >
            <form onSubmit={handleSubmit}>
                <InputComponent
                required={true}
                label='Email'
                name='email'
                onChange={handleInputChange} 
                value={email}
                maxLength={30}
                type='email'
                />

                <InputComponent
                required={true}
                label='Password'
                name='password'
                onChange={handleInputChange} 
                value={password}
                maxLength={12}
                type='password'
                />

                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
            </form>

        </SignInContainer>
    )
}

export default SignInForm;