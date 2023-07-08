import React, { useState} from "react";
import {signInWithGooglePopup,createUserDocumentFromAuth,} from "../../utilz/firebase/firebase";
import { SignupFormComponent, SigninFormComponent } from "../../components";
import './AuthPage.styles.scss';

export const AuthPage : React.FC = ()=> {

    // States
    const [newUser, setNewUser] = useState(false);

    // State Handlers
    const toggleNewUser = ()=> setNewUser(newUser === false);

    const logGoogleUser = async()=> {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
    }

    // renderer
    return(
        <React.Fragment>
            <div className="layout-wrapper">
                <div className="form-card">
                    <p 
                        className="text-link"
                        onClick={toggleNewUser}
                    >
                        {newUser? 'Create account': 'Already have an account'}
                    </p>
                    {
                        newUser? <SigninFormComponent/>:<SignupFormComponent/>
                    }
                    
                    
                </div>
            </div>
            
            
        </React.Fragment>
    )
}