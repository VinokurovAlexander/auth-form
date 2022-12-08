import {Navigate} from "react-router-dom";

import { useAuth } from "~/shared/auth";


const Main = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/signin" />
    }

    return (
        <>
            <h1>Congratulations {user.name}!</h1>
            <p>You are already sign in.</p>
        </>
    );
}

export default Main;

