import { PropsWithChildren, FC } from "react";

import classes from './Button.module.css';

interface Button {
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit'
}

const Button: FC<PropsWithChildren<Button>> =  ({ children, onClick, className, type }) => (
    <button
        className={`${classes.button} ${className}`}
        onClick={onClick}
        type={type}
    >
        {children}
    </button>
)

export default Button;