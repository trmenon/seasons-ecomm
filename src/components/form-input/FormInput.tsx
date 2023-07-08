import React from "react";
import './FormInput.styles.scss';

interface FormInterfaceProps {
    name: string;
    label: string;
    value: string;
    type: string;
    placeholder: string;
    required: boolean;
    onChange: (name: string, value: string)=> void;
}

export const FormInput: React.FC<FormInterfaceProps> = ({
    label,
    onChange,
    ...props
})=> {
    // Change Handler
    const handleChange = (event: any)=> {
        const name = event?.target?.name;
        const value = event?.target?.value;
        onChange(name, value);
    }
    return(
        <React.Fragment>
            <div className="form-field-group">            
                
                <input 
                    className="form-input"
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    placeholder={''}
                    onChange={handleChange}
                    required={props.required}
                />
                <label className={`${props.value.length? 'shrink': ''} form-input-label`}>{label}</label>
            </div>
        </React.Fragment>
    )
}