import { createContext, useContext, useReducer } from "react";

type contextType = {
    state: any,
    dispatch: any
}

type propTypes = {
    children: React.ReactNode
}

const addProductModalContext = createContext<contextType | null>(null);

const modalPages = ['basic', 'category', 'images'];
const initialState = {
    pageCount: 0,
    pageName: modalPages[0]
}

function reducer(state: any, action: any) {
    switch(action.type) {
        case 'next':
            return {
                ...state,
                pageCount: state.pageCount + 1,
                pageName: modalPages[state.pageCount + 1]
            };
        case 'prev':
            return {
                ...state,
                pageCount: state.pageCount - 1,
                pageName: modalPages[state.pageCount - 1]
            };
        case 'default':   
            return {
                ...state,
                pageCount: 0,
                pageName: modalPages[0]
            }
        default:
            return state
    }
}

export function AddProductModalContextProvider({ children }: propTypes) {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return <addProductModalContext.Provider value={{state, dispatch}}>
        {children}
    </addProductModalContext.Provider>
}

export function useAddProductContext() {
    const context = useContext(addProductModalContext)
    if(!context) throw Error('Cant use context here!')
    return context;
}