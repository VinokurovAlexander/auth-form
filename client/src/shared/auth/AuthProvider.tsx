import {createContext, PropsWithChildren, useState} from "react";

interface User {
    name: string;
}

interface AuthContext {
    user: User | null,
    signIn: (user: User) => void;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContext>(null!);

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);

    const signIn = (user: User) => {
        setUser(user);
    }

    const signOut = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
