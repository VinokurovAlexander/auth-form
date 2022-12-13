import {PropsWithChildren} from "react";

import classes from './Layout.module.css';

const Layout = ({ children }: PropsWithChildren) => (
    <div className={classes.layout}>
        <div className={classes.container}>
            {children}
        </div>
    </div>
)

export default Layout;