import { createContext, useContext, useState } from "react";

type contextType = {
    searchText: string,
    setSearchText: any,
    sortBy: string,
    setSortBy: any,
}

const productFilterContext = createContext<contextType | null>(null);

type childrenType = {
    children: React.ReactNode
}

export default function ProductFilterContextProvider({ children }: childrenType) {
    const [ searchText, setSearchText ] = useState('');
    const [ sortBy, setSortBy ] = useState('');

    return <productFilterContext.Provider value={{searchText, setSearchText, sortBy, setSortBy}}>
        { children }
    </productFilterContext.Provider>
}

export function useProductFilterContext() {
    const context = useContext(productFilterContext);
    if(!context) throw new Error("CAN'T USE CONTEXT HERE!")
    return context;
}