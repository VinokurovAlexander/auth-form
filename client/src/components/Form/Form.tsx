import { FC } from "react";

import { Field } from "~/components/Field";
import { Button } from "~/components/Button";

import classes from './Form.module.css';

const Form: FC = () => (
    <div className={classes.form}>
        <h2>Sign in</h2>
        <Field label='Email address' name="email" id="email" required />
        <Field label="Password" name="password" id="password" type="password" required />
        <Button>
            Sign In
        </Button>
    </div>
)

export default Form;