import {useReducer} from "react";

export interface User {
    name: string;
}
export interface AuthState {
    user: User | null,
    error: string | null,
    loading: boolean
}

enum Action {
    SignIn = 'SIGNIN',
    SignOut = 'SIGNOUT',
    Loading = 'LOADING',
    Error = 'ERROR'
}

interface SignInAction {
    type: Action.SignIn,
    payload: User
}

interface SingOutAction {
    type: Action.SignOut
}

interface LoadingAction {
    type: Action.Loading
}

interface ErrorAction {
    type: Action.Error,
    payload: string | null
}

type AllActions =  SignInAction | SingOutAction | LoadingAction | ErrorAction;

const initialState = {
    user: null,
    error: null,
    loading: false
}

const reducer = (state: AuthState, action: AllActions) => {
    const { type } = action;

    switch (type) {
        case Action.SignIn: {
            const user = action.payload

            return {
                ...state,
                loading: false,
                error: null,
                user
            }
        }

        case Action.SignOut: {
            return initialState
        }

        case Action.Loading: {
            return {
                ...initialState,
                loading: true
            }
        }

        case Action.Error: {
            const error = action.payload

            return {
                ...state,
                error
            }
        }
    }
}

export const useAuthState = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const signIn = (user: User) => {
        dispatch({ type: Action.SignIn, payload: user });
    }

    const signOut = () => {
        dispatch({ type: Action.SignOut });
    }

    const setLoading = () => {
        dispatch({ type: Action.Loading })
    }

    const setError = (error: string) => {
        dispatch({ type: Action.Error, payload: error })
    }

    return { state, actions: { signIn, signOut, setLoading, setError }}
}