import { AuthProvider } from "~/shared/auth";

import RouterProvider from './providers/RouterProvider';
import { Layout } from "./ui/Layout";

const App = () => (
    <Layout>
        <AuthProvider>
            <RouterProvider />
        </AuthProvider>
    </Layout>
)

export default App;