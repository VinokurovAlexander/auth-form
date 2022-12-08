import { PropsWithChildren, FC } from "react";

import classes from './Button.module.css';

interface Button {
    onClick?: () => void;
    className?: string;
}

const Button: FC<PropsWithChildren<Button>> =  ({ children, onClick, className }) => (
    <button
        className={`${classes.button} ${className}`}
        onClick={onClick}>
        {children}
    </button>
)

export default Button;