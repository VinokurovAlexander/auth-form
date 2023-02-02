import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Main } from "~/pages/Main";
import { SignIn } from "~/pages/SignIn";
import { Error } from "~/pages/Error";
import { SignUp } from "~/pages/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
    },
    {
        path: 'signin',
        element: <SignIn />
    },
    {
        path: 'signup',
        element: <SignUp />
    }
])

export default () => <RouterProvider router={router} />

