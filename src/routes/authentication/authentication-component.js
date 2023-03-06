import {React} from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import SignInForm from "../../components/sign-in-form/sign-in-form-component"
import "../authentication/authentication-component.styles.scss"
import Button from "../../components/button/button-component";

const Authentication = () => {

    // when user signed in - pass the user up to the App root


    return(
        <div>
                <div className="authentication-container">
                    <SignInForm/>       
                    <SignUpForm/>
                </div>
        </div>
    )
};

export default Authentication;