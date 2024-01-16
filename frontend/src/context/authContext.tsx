import { createContext, useContext, useState } from 'react';

type AuthContextType = {
    currentUser: string | null,
    userRole: string | null,
    persist: boolean,
    setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>
    setUserRole: React.Dispatch<React.SetStateAction<string | null>>
    setPersist: React.Dispatch<React.SetStateAction<boolean>>
}

const authContext = createContext<AuthContextType | null>(null);

type ContextPropsType = {
    children: React.ReactNode
}

export function AuthContextProvider({ children } : ContextPropsType) {
    const [ currentUser, setCurrentUser ] = useState<string | null>(null);
    const [ userRole, setUserRole ] = useState<string | null>(null);
    const [ persist, setPersist ] = useState<boolean>(JSON.parse(localStorage.getItem('persist')) || false);

    return <authContext.Provider value={{currentUser, setCurrentUser, userRole, setUserRole, persist, setPersist}}>
        {children}
    </authContext.Provider>
}

export function useAuthContext() {
    const context = useContext(authContext)
    if(!context) throw Error('Cant use context here!')
    return context;
}