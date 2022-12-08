import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Main } from "~/pages/Main";
import { SignIn } from "~/pages/SignIn";
import { Error } from "~/pages/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
    },
    {
        path: 'signin',
        element: <SignIn />
    }
])

export default () => <RouterProvider router={router} />

