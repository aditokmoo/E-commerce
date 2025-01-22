import { createContext, useContext, useReducer } from "react";
// Types
interface contextType {
    state: State;
    dispatch: React.Dispatch<Action>;
}
interface State {
    pageCount: number,
    pageName: string
}
type Action = { type: 'next' } | { type: 'prev' } | { type: 'default' };
interface propTypes { children: React.ReactNode }

// Context
const addProductModalContext = createContext<contextType | null>(null);
// Initial data
const modalPages = ['basic', 'category', 'images'];
const initialState = {
    pageCount: 0,
    pageName: modalPages[0]
}

// Reducer
function reducer(state: State, action: Action) {
    switch (action.type) {
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
    const [state, dispatch] = useReducer(reducer, initialState);

    return <addProductModalContext.Provider value={{ state, dispatch }}>
        {children}
    </addProductModalContext.Provider>
}

export function useAddProductContext() {
    const context = useContext(addProductModalContext)
    if (!context) throw Error('Cant use context here!')
    return context;
}