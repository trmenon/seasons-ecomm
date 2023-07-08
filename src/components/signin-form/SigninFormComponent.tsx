import React, { useState} from "react";
import './SigninFormComponent.styles.scss';
import { SignInFieldProps } from "../../types";
import { FormInput } from "../form-input/FormInput";
import { Button } from "../button/Button";
import { 
    signInUserWithEmailAndPassword, 
    createUserDocumentFromAuth,
    signInWithGooglePopup 
} from "../../utilz/firebase/firebase";

const defaultFieldValues : SignInFieldProps = {email: '',password: '',};

export const SigninFormComponent : React.FC = ()=> {

    // States
    const [formFields, setFormFields] = useState<SignInFieldProps>(defaultFieldValues);

    

    // Event Handlers
    const updateFormFields = (name: string, value: string)=> setFormFields({...formFields, [name]: value});
    const signInWithGoogle = async()=> {
        const response = await signInWithGooglePopup();
        console.log(response?.user);
    }
    const handleFormSubmit = async (event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>)=> {
        event?.preventDefault();
        try{
            const {email, password} = formFields;
            if(email && password) {
                    const response: any = await signInUserWithEmailAndPassword(email, password);
                    
                    if(response?.user) {
                        console.log(response?.user)
                    }else {
                        console.log(response)
                    }
            }
        }catch(error) {
            console.log(error);
        }
        
        
    }

    // Renderer
    return(
        <React.Fragment>
            <div className="signup-container">
                <h4>Welcome Back! Signin here</h4>
                <form onSubmit={handleFormSubmit}>
                    <FormInput 
                        name={"email"}
                        label={"Email"}
                        value = {formFields?.email}
                        type = {"email"}
                        placeholder={"Enter email"}
                        required={true}
                        onChange={updateFormFields}
                    />
                    <FormInput 
                        name={"password"}
                        label={"Password"}
                        value = {formFields?.password}
                        type = {"password"}
                        placeholder={"Enter password"}
                        required={true}
                        onChange={updateFormFields}
                    />
                    <div className="form-actions">
                        <Button 
                            label = {'Sign in'}
                            type = {'submit'}
                            variant = {'INVERTED'}
                            onClick = {()=> {}}
                        />
                        <Button 
                            label = {'Google'}
                            type = {'button'}
                            variant = {'GOOGLE'}
                            onClick = {signInWithGoogle}
                        />
                    </div>
                    
                </form>
            </div>
        </React.Fragment>
    )
}