import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SignIn } from "~/pages/SignIn";
import { Error } from "~/pages/Error";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        children: [{
            path: 'signin',
            element: <SignIn />
        }]
    }
])

export default () => <RouterProvider router={router} />

