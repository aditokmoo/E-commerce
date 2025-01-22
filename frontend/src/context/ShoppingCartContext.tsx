import { createContext, useContext, useEffect, useState } from "react";

interface contextType {
    cartItems: [],
    setCartItems: any,
    handleRemoveCartItem: any,
    cartItemsQuantity: any,
    taxPrice: number,
    subTotalPrice: number,
    shippingPrice: number,
    totalPrice: number,
    addQuantity: any,
    removeQuantity: any
}

interface propTypes {
    children: React.ReactNode
}

const shoppingCartContext = createContext<contextType | null>(null);

export default function ShoppingCartContextProvider({ children }: propTypes) {
    const dataFromLS = localStorage.getItem('cart');
    const cartData = dataFromLS ? JSON.parse(dataFromLS) : [];
    const [cartItems, setCartItems] = useState(cartData)
    const [cartItemsQuantity, setCartItemsQuantity] = useState(getInitialQuantity());
    const [cartItemsPrice, setCartItemsPrice] = useState(getInitialPrice());
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [taxPrice, setTaxPrice] = useState(getInitalTax());
    const [shippingPrice, setShippingPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(getInitialTotalPrice());

    // INITIAL FUNCTION FOR CART ITEM QUNATITY
    function getInitialQuantity() {
        let obj: any = {};
        for (let i = 0; i < cartData.length; i++) {
            obj[cartData[i]._id] = 1;
        }
        return obj
    }

    // INITIAL FUNCTION FOR CART ITEM PRICE
    function getInitialPrice() {
        let obj: any = {};
        for (let i = 0; i < cartData.length; i++) {
            const { discountPrice, price } = cartData[i]
            obj[cartData[i]._id] = discountPrice ? discountPrice : price;
        }
        return obj;
    }

    // INITIAL FUNCTION FOR CART ITEM TAX
    function getInitalTax() {
        const initialTaxPrice = subTotalPrice * 0.10;
        return initialTaxPrice;
    }

    // INITIAL FUNCTION FOR CART ITEMS TOTAL PRICE
    function getInitialTotalPrice() {
        const totalPrice = subTotalPrice + taxPrice + shippingPrice;
        return totalPrice
    }

    // INCREASE THE AMOUNT OF CART ITEMS - FUNCTION
    const addQuantity = (dataID: any) => {
        setCartItemsQuantity((prevState: any) => {
            return {
                ...prevState,
                [dataID]: prevState[dataID] + 1
            }
        });

        cartItems.forEach((item: any) => {
            if (item._id === dataID) {
                const price = item.discountPrice ? item.discountPrice : item.price;
                setCartItemsPrice((prevState: any) => {
                    return {
                        ...prevState,
                        [dataID]: price * (cartItemsQuantity[dataID] + 1)
                    }
                })
            }
        })
    }

    // REDUCE AMOUNT OF CART ITEMS - FUNCTION
    const removeQuantity = (dataID: number) => {
        if (cartItemsQuantity[dataID] === 1) return;

        setCartItemsQuantity((prevState: any) => {
            return {
                ...prevState,
                [dataID]: prevState[dataID] - 1
            }
        });

        cartItems.forEach((item: any) => {
            if (item._id === dataID) {
                const price = item.discountPrice ? item.discountPrice : item.price;
                setCartItemsPrice((prevState: any) => {
                    return {
                        ...prevState,
                        [dataID]: price * (cartItemsQuantity[dataID] - 1)
                    }
                })
            }
        })
    }

    // REMOVE CART ITEM - FUNCTION
    const handleRemoveCartItem = (data: any) => {
        setCartItems((prevCartItems: any) => {
            const deletedItems = prevCartItems.filter((item: any) => item._id !== data._id)
            localStorage.setItem('cart', JSON.stringify(deletedItems));
            return deletedItems;
        });
        setCartItemsQuantity((prevState: any) => ({ ...prevState, [data._id]: 0 }))
        setCartItemsPrice((prevState: any) => ({ ...prevState, [data._id]: 0 }))
    }

    useEffect(() => {
        // GET SUBTOTAL PRICE
        function getSubTotalPrice() {
            const subTotalVal: any = Object.values(cartItemsPrice).map((val) => val).reduce((x: any, y: any) => x + y, 0);
            setSubTotalPrice(subTotalVal)
        }

        // GET TAX PRICE
        function getTaxPrice() {
            const taxPrice: any = subTotalPrice * 0.10;
            setTaxPrice(taxPrice)
        }

        // GET TOTAL PRICE
        function getTotalPrice() {
            const totalPrice: any = subTotalPrice + taxPrice + shippingPrice;
            setTotalPrice(totalPrice);
        }

        // GET SHIPPING PRICE
        function getShippingPrice() {
            const shippingPrice = cartItems.length === 0 ? 0 : 25;
            setShippingPrice(shippingPrice)
        }

        getSubTotalPrice();
        getTaxPrice();
        getTotalPrice();
        getShippingPrice();
    }, [cartItemsQuantity, cartItemsPrice, subTotalPrice, taxPrice, totalPrice, shippingPrice])

    return (
        <shoppingCartContext.Provider value={{ cartItems, setCartItems, handleRemoveCartItem, totalPrice, shippingPrice, taxPrice, cartItemsQuantity, addQuantity, removeQuantity, subTotalPrice }}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export function useShoppingCartContext() {
    const context = useContext(shoppingCartContext);
    if (!context) throw new Error("CONTEXT CANT'T USE HERE");
    return context;
}