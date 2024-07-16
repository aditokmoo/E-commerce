export function useHandleAddToWishlist() {
    const handleAddToWishlist = (data: any) => {
        // Get data from LS
        const dataFromLS = localStorage.getItem('wishlist');
        // Check if data exist in localstorage if yes parse it
        const wishlistData = dataFromLS ? JSON.parse(dataFromLS) : [];
        // Check if data exist in LS
        const dataExist = wishlistData.some((item: any) => item._id === data._id)
        

        // Add if data dosnt exist
        if(!dataExist) {
            // Push to array
            wishlistData.push(data);
            // store in ls
            localStorage.setItem('wishlist', JSON.stringify(wishlistData))
        }

        return dataExist
    };

    return { handleAddToWishlist };
}