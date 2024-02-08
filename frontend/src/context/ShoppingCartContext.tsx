import { createContext, useContext, useState } from "react";

type contextType = {
    cartItems: any,
    setCartItems: any,
    handleRemoveCartItem: any
}

type propTypes = {
    children: React.ReactNode
}

const shoppingCartContext = createContext<contextType | null>(null);


export default function ShoppingCartContextProvider({ children }: propTypes) {
    const dataFromLS = localStorage.getItem('cart');
    const cartData = dataFromLS ? JSON.parse(dataFromLS) : [];  
    const [ cartItems, setCartItems ] = useState(cartData)
 
    const handleRemoveCartItem = (data: any) => {
        setCartItems((prevCartItems: any) => {
            const deletedItems = prevCartItems.filter((item: any) => item._id !== data._id)
            localStorage.setItem('cart', JSON.stringify(deletedItems));
            return deletedItems;
        });
    }

    return (
        <shoppingCartContext.Provider value={{cartItems, setCartItems, handleRemoveCartItem}}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export function useShoppingCartContext() {
    const context = useContext(shoppingCartContext);
    if(!context) throw new Error("CONTEXT CANT'T USE HERE");
    return context;
}