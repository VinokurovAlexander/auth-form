import {FC, FormEventHandler, PropsWithChildren, useEffect} from "react";
import {Navigate} from "react-router-dom";

import { Button } from "~/components/Button";
import { Alert } from "~/components/Alert";
import { Link } from "~/components/Link";
import { useAuth } from "~/shared/auth";

import classes from './Form.module.css';

interface Form {
    title: string,
    link?: {
        to: string,
        title: string
    }
    onSubmit?: () => void;
}

const Form: FC<PropsWithChildren<Form>> = ({ title, link, onSubmit, children }) => {
    const { state: { error, user }, actions: { setError, setLoading }} = useAuth();

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();

        setLoading();

        onSubmit?.();
    }

    useEffect(() => {
        return () => {
            setError(null)
        }
    }, []);

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h2 className={classes.title}>{title}</h2>
            <form className={classes.form} onSubmit={handleSubmit}>
                {children}
                <Button type="submit">
                    {title}
                </Button>
                {link && (
                    <Link to={link.to}>
                        {link.title}
                    </Link>
                )}
                {error && (
                    <Alert>
                        {error}
                    </Alert>
                )}
            </form>
        </div>
    )
}

export default Form;