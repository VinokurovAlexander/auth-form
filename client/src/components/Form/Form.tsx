import {FC, useState} from "react";

import { Field } from "~/components/Field";
import { Button } from "~/components/Button";
import { useAuth } from "~/shared/auth";
import { Alert } from "~/components/Alert";

import classes from './Form.module.css';

const Form: FC = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const { state: { error } ,actions: { setError, setLoading } } = useAuth();

    const handleClick = async () => {
        setLoading();

        const response = await fetch('http://localhost:8080/signin',
            {
                    method: 'POST',
                    body: JSON.stringify({ mail, password }),
                    headers: {
                        "Content-Type": "application/json",
                    },
            });

        const data = await response.json();

        if (response.ok) {
            console.log(response);
        } else {
            setError(data.message);
        }
    }

    return (
        <div className={classes.form}>
            <h2 className={classes.title}>Sign in</h2>
            <Field label='Email address' name="email" id="email" required onChange={setMail} />
            <Field label="Password" name="password" id="password" type="password" required onChange={setPassword} />
            <Button onClick={handleClick}>
                Sign In
            </Button>
            {error && (
                <Alert>
                    {error}
                </Alert>
            )}
        </div>
    )
}


export default Form;