import {useState} from "react";

import { Form } from "~/components/Form";
import { Field } from "~/components/Field";
import { useAuth } from "~/shared/auth";
const SignIn = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const { actions: { setError, signIn }} = useAuth();

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/signin',
                {
                    method: 'POST',
                    body: JSON.stringify({ mail, password }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

            const { user, message } = await response.json();

            if (response.ok) {
                signIn(user)
            } else {
                setError(message)
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <Form
                title="Sign In"
                link={{to: '/signup', title: `Don't have an account? Sign up` }}
                onSubmit={handleSubmit}

            >
                <Field label='Mail address' name="mail" id="mail" required onChange={setMail} />
                <Field label="Password" name="password" id="password" type="password" required onChange={setPassword} />
            </Form>
        </div>
    )
}


export default SignIn;