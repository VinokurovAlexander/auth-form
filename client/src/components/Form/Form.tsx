import {FC, useState} from "react";

import { Field } from "~/components/Field";
import { Button } from "~/components/Button";

import classes from './Form.module.css';

const Form: FC = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');


    const handleClick = async () => {
        const response = await fetch('http://localhost:8080/signin',
            {
                    method: 'POST',
                    body: JSON.stringify({ mail, password }),
                    headers: {
                        "Content-Type": "application/json",
                    },
            });

        if (response.ok) {
            console.log(response)
        }
    }

    return (
        <div className={classes.form}>
            <h2>Sign in</h2>
            <Field label='Email address' name="email" id="email" required onChange={setMail}/>
            <Field label="Password" name="password" id="password" type="password" required onChange={setPassword} />
            <Button onClick={handleClick}>
                Sign In
            </Button>
        </div>
    )
}


export default Form;