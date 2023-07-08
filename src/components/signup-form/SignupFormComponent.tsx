import React, { useState} from "react";
import './SignupFormComponent.styles.scss';
import { SignUpFieldProps } from "../../types";
import { FormInput } from "../form-input/FormInput";
import { Button } from "../button/Button";
import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth 
} from "../../utilz/firebase/firebase";

const defaultFieldValues : SignUpFieldProps = {
    display_name: '',
    email: '',
    password: '',
    confirm_password: ''
};

export const SignupFormComponent : React.FC = ()=> {

    // States
    const [formFields, setFormFields] = useState<SignUpFieldProps>(defaultFieldValues);

    

    // Event Handlers
    const updateFormFields = (name: string, value: string)=> setFormFields({...formFields, [name]: value});
    const handleFormSubmit = async (event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>)=> {
        event?.preventDefault();
        const {display_name, email, password, confirm_password} = formFields;
        if(display_name && email && password && confirm_password) {
            if(password === confirm_password) {
                const response: any = await createAuthUserWithEmailAndPassword(email, password);
                if(response?.user) {
                    const newAuthUser = await createUserDocumentFromAuth(response?.user, 
                        {
                            displayName: display_name,
                            createdAt: new Date()
                        }
                    )
                    console.log(newAuthUser);
                }
            }
        }
        
    }
    const handleReset = ()=> setFormFields(defaultFieldValues);
    // Renderer
    return(
        <React.Fragment>
            <div className="signup-container">
                <h4>Don't have an account? Signup here</h4>
                <form onSubmit={handleFormSubmit} onReset={handleReset}>
                    <FormInput 
                        name={"display_name"}
                        label={"Display Name"}
                        value = {formFields?.display_name}
                        type = {"text"}
                        placeholder={"Enter display name"}
                        required={true}
                        onChange={updateFormFields}
                    />
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
                    <FormInput 
                        name={"confirm_password"}
                        label={"Confirm Password"}
                        value = {formFields?.confirm_password}
                        type = {"password"}
                        placeholder={"Confirm password"}
                        required={true}
                        onChange={updateFormFields}
                    />
                    <div className="form-actions">
                        <Button 
                            label = {'Sign up'}
                            type = {'submit'}
                            variant = {'INVERTED'}
                            onClick = {()=> {}}
                        />
                        <Button 
                            label = {'Reset'}
                            type = {'reset'}
                            variant = {'INVERTED'}
                            onClick = {()=> {}}
                        />
                    </div>
                    
                </form>
            </div>
        </React.Fragment>
    )
}