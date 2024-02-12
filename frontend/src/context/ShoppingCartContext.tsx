import { createContext, useContext, useEffect, useState } from "react";

type contextType = {
    cartItems: [],
    setCartItems: any,
    handleRemoveCartItem: any,
    cartItemsQuantity: any,
    subTotalPrice: number,
    addQuantity: any,
    removeQuantity: any
}

type propTypes = {
    children: React.ReactNode
}

const shoppingCartContext = createContext<contextType | null>(null);

export default function ShoppingCartContextProvider({ children }: propTypes) {
    const dataFromLS = localStorage.getItem('cart');
    const cartData = dataFromLS ? JSON.parse(dataFromLS) : [];  
    const [ cartItems, setCartItems ] = useState(cartData)
    const [ cartItemsQuantity, setCartItemsQuantity ] = useState(getInitialQuantity());
    const [ cartItemsPrice, setCartItemsPrice ] = useState(getInitialPrice());
    const [ subTotalPrice, setSubTotalPrice ] = useState(0);

    function getInitialQuantity() {
        let obj: any = {};
        for(let i = 0; i < cartData.length; i++) {
            obj[cartData[i]._id] = 1;
        }
        return obj
    }

    function getInitialPrice() {
        let obj: any = {};
        for(let i = 0; i < cartData.length; i++) {
            const { discountPrice, price } = cartData[i]
            obj[cartData[i]._id] = discountPrice ? discountPrice: price;
        }
        return obj;
    }

    useEffect(() => {
        function getSubTotalPrice() {
            // Get total from cartItemsPrice
            const subTotalVal: any = Object.values(cartItemsPrice).map((val) => val).reduce((x: any,y:any) => x+y, 0);
            // Save in state
            setSubTotalPrice(subTotalVal)
        }

        getSubTotalPrice();
    }, [cartItemsQuantity, cartItemsPrice])

    const addQuantity = (dataID: any) => {
        setCartItemsQuantity((prevState: any) => {
            return {
                ...prevState,
                [dataID]: prevState[dataID] + 1
            }
        });
    
        cartItems.forEach((item: any) => {
            if(item._id === dataID) {
                const price = item.discountPrice ? item.discountPrice : item.price;
                console.log(cartItemsQuantity[dataID] + 1)
                setCartItemsPrice((prevState: any) => {
                    return {
                        ...prevState,
                        [dataID]: price * (cartItemsQuantity[dataID] + 1)
                    }
                })
            }
        })
    }

    const removeQuantity = (dataID: number) => {
        setCartItemsQuantity((prevState: any) => {
            return {
                ...prevState,
                [dataID]: prevState[dataID] - 1
            }
        });
    
        cartItems.forEach((item: any) => {
            if(item._id === dataID) {
                const price = item.discountPrice ? item.discountPrice : item.price;
                console.log(cartItemsQuantity[dataID] + 1)
                setCartItemsPrice((prevState: any) => {
                    return {
                        ...prevState,
                        [dataID]: price * (cartItemsQuantity[dataID] - 1)
                    }
                })
            }
        })
    }

    const handleRemoveCartItem = (data: any) => {
        setCartItems((prevCartItems: any) => {
            const deletedItems = prevCartItems.filter((item: any) => item._id !== data._id)
            localStorage.setItem('cart', JSON.stringify(deletedItems));
            return deletedItems;
        });
    }

    return (
        <shoppingCartContext.Provider value={{cartItems, setCartItems, handleRemoveCartItem, cartItemsQuantity, addQuantity, removeQuantity, subTotalPrice }}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export function useShoppingCartContext() {
    const context = useContext(shoppingCartContext);
    if(!context) throw new Error("CONTEXT CANT'T USE HERE");
    return context;
}