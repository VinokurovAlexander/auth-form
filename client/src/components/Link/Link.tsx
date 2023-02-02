import {FC, PropsWithChildren} from "react";
import { NavLink } from "react-router-dom";

import classes from './Link.module.css';

interface Link {
    to: string;
}

const Link: FC<PropsWithChildren<Link>> = ({ to, children }) =>
    <NavLink to={to} className={classes.link}>{children}</NavLink>;

export default Link;