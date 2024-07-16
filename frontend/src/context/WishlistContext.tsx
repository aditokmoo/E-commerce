import { createContext, useContext, useState } from "react";

type contextType = {
    favorite: object,
    setFavorite: any,
}

type propTypes = {
    children: React.ReactNode;
}

const wishlistContext = createContext<contextType | null>(null);

export default function WishlistContextProvider({ children }: propTypes) {
    const dataFromLS = localStorage.getItem('wishlist');
    const wishlistData = dataFromLS ? JSON.parse(dataFromLS) : []; 
    const [ favorite, setFavorite ] = useState(wishlistData);

    return (
        <wishlistContext.Provider value={{favorite, setFavorite}}>
            {children}
        </wishlistContext.Provider>
    )
}

export function useWishlistContext() {
    const context = useContext(wishlistContext);
    if(!context) throw new Error("CAN'T USE CONTEXT HERE!")
    return context;
} 