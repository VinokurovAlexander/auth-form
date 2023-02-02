import { createContext, PropsWithChildren } from "react";
import { AuthState, User, useAuthState  } from "./state";

interface AuthContext {
    state: AuthState,
    actions: {
        signIn: (user: User) => void;
        signOut: () => void;
        setLoading: () => void;
        setError: (error: string | null) => void;
    }
}

export const AuthContext = createContext<AuthContext>(null!);

const AuthProvider = ({ children }: PropsWithChildren) => {
    const value = useAuthState();

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
