import React from "react";
import './Button.styles.scss';

interface ButtonProps {
    label: string;
    type: any;
    variant: string;
    onClick: ()=> void;
}

const button_variants:any = {
    GOOGLE: 'google-btn-class',
    INVERTED: 'inverted-btn-class',
    REGULAR: 'regular-btn-class'
}

export const Button: React.FC<ButtonProps> = ({
    label,
    type,
    variant,
    onClick
})=> {
    return (
        <React.Fragment>
            <button
                className={`button-container ${button_variants[variant]}`}
                type={type}
                onClick={onClick}
            >
                {label}
            </button>
        </React.Fragment>
    )
}