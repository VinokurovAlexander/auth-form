import {useState} from "react";
import {useNavigate} from "react-router-dom";

import { Form } from "~/components/Form";
import { Field } from "~/components/Field";
import {useAuth} from "~/shared/auth";


const SignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const { actions: { setError, signIn }} = useAuth();

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:8080/signup',
            {
                method: 'POST',
                body: JSON.stringify({ mail, password, name }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

        const { user, message } = await response.json();

        if (response.ok) {
            signIn(user);
            navigate('/');
        } else {
            setError(message);
        }
    }

    return (
        <div>
            <Form
                title="Sign Up"
                link={{ to: '/signin', title: 'Already have an account? Sign in' }}
                onSubmit={handleSubmit}
            >
                <Field label="Name" name="name" id="name" onChange={setName} required />
                <Field label='Mail address' name="mail" id="mail" required onChange={setMail} />
                <Field label="Password" name="password" id="password" type="password" required onChange={setPassword} />
                <Field label="Repeat password" name="repeat-password" id="repeat-password" type="password" required onChange={setRepeatedPassword} />
            </Form>
        </div>
    )
}

export default SignUp;