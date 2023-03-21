import {React} from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import SignInForm from "../../components/sign-in-form/sign-in-form-component"
import { AuthenticationContainer } from "./authentication-component.styles";
const Authentication = () => {

    // when user signed in - pass the user up to the App root


    return(
        <div>
                <AuthenticationContainer className="authentication-container">
                    <SignInForm/>       
                    <SignUpForm/>
                </AuthenticationContainer>
        </div>
    )
};

export default Authentication;