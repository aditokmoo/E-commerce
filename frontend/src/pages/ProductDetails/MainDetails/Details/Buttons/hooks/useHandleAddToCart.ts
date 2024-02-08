type dataType = {
    name: string,
    discountPrice: number,
    price: number,
    desc: string,
    _id: string,
}

export function useHandleAddToCart() {
    const handleAddToCart = (data: dataType) => {
        // Get data from LS
        const dataFromLS = localStorage.getItem('cart');
        // If data from LS exist parse it if not return empty array
        const cartData = dataFromLS ? JSON.parse(dataFromLS) : [];
    
        // Check if data exist in LS
        const dataExist = cartData.some((item: dataType) => item._id === data._id)

        if(!dataExist) {
            // Push to array
            cartData.push(data);
            // Store in LS
            localStorage.setItem('cart', JSON.stringify(cartData));
        }

        return dataExist;
    }

    return { handleAddToCart };
}