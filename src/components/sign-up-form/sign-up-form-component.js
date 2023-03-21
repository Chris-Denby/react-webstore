import {React, useState} from "react";
import { createAuthUserFromForm, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import InputComponent from "../form-input/form-input-component";
import Button from "../button/button-component";
import { SignUpContainer } from "./sign-up-form-component.styles";

const defaultFormState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = ()=> {
    const [formFields, setFormFields] = useState(defaultFormState);
    const { displayName, email, password, confirmPassword} = formFields;

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
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        if(!displayName || !email || !password) return;
        setFormFields(defaultFormState);
        try {
            const {user} = await createAuthUserFromForm(email, password);
            const userDocRef = await createUserDocFromAuth(user, {displayName: displayName});

            //set user to context state
        } catch (error) {
            if(error.code === "auth/email-already-in-use") {
                alert("Email already registered")   
            } else {
                alert("error creating account")
                console.log(error)
            }
        }
    }
    
    return(
        <SignUpContainer>
            <h2>Dont have an account?</h2>
            <span>Sign up with email and password</span >

            <form onSubmit={handleSubmit}>
                <InputComponent
                required={true}
                label='Display name'
                name ='displayName'
                onChange={handleInputChange} 
                value={displayName}
                maxLength={12}
                type='text'
                />

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

                <InputComponent
                required={true}
                label='Confirm password'
                name='confirmPassword'
                onChange={handleInputChange} 
                value={confirmPassword}
                maxLength={12}
                type='password'
                />
                
                <Button type='submit'>Submit</Button>
            </form>

        </SignUpContainer>
    )
}

export default SignUpForm;