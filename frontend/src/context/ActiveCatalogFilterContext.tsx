import { createContext, useContext, useState } from 'react';

type ActiveCatalogFilterContextType = {
    activeFilter: {
        [key: string]: string;
    },
    setActiveFilter: React.Dispatch<React.SetStateAction<{
        price: string,
        type: string,
        brand: string,
        memory: string,
        ssd: string,
        cpu: string,
        gpu: string
    }>>
}

const activeCatalogFilterContext = createContext<ActiveCatalogFilterContextType | null>(null);

type ContextPropsType = {
    children: React.ReactNode
}

export function ActiveCatalogFilterContextProvider({ children } : ContextPropsType) {
    const [ activeFilter, setActiveFilter ] = useState({
        price: '',
        type: '',
        brand: '',
        memory: '',
        ssd: '',
        cpu: '',
        gpu: '',
    });

    return <activeCatalogFilterContext.Provider value={{activeFilter, setActiveFilter}}>
        {children}
    </activeCatalogFilterContext.Provider>
}

export function useActiveCatalogFilterContext() {
    const context = useContext(activeCatalogFilterContext)
    if(!context) throw Error('Cant you context here!')
    return context;
}