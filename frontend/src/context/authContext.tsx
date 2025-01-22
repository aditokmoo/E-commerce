import { Dispatch, createContext, useContext, useReducer } from 'react';

interface reducerStateType {
    currentUser: string | null,
    userRole: string | null,
    persist: boolean;
}

type reducerActionType = { type: "SET_CURRENT_USER"; payload: string } | { type: 'SET_USER_ROLE'; payload: string } | { type: "SET_PERSIST"; payload: boolean } | { type: 'RESET_AUTH' };

interface AuthContextType {
    state: reducerStateType,
    dispatch: Dispatch<reducerActionType>
}

interface ContextPropsType {
    children: React.ReactNode
}

const authContext = createContext<AuthContextType | null>(null);
const persistData = localStorage.getItem('persist')
const initialState = {
    currentUser: null,
    userRole: null,
    persist: persistData ? JSON.parse(persistData) : false
}

function reducer(state: reducerStateType, action: reducerActionType) {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
            };
        case 'SET_USER_ROLE':
            return {
                ...state,
                userRole: action.payload
            };
        case 'SET_PERSIST':
            return {
                ...state,
                persist: action.payload
            };
        case 'RESET_AUTH':
            return initialState;
        default:
            return state;
    }
}

export function AuthContextProvider({ children }: ContextPropsType) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <authContext.Provider value={{ state, dispatch }}>
        {children}
    </authContext.Provider>
}

export function useAuthContext() {
    const context = useContext(authContext)
    if (!context) throw Error('Cant use context here!')
    return context;
}