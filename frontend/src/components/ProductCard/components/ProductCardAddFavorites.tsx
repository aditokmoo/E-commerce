import { useState } from "react";
import { useHandleAddToWishlist } from "../../../hooks/useHandleAddToWishlist";

export default function ProductCardAddFavorites({ data }: any) {
    const { handleAddToWishlist } = useHandleAddToWishlist();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            border: '0',
            backgroundColor: 'inherit',
            fontSize: '2rem',
            color: '#909090C4',
            cursor: 'pointer',
            opacity: isHovered ? 0.7 : 1,
        }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleAddToWishlist(data)}
        ></button>
    )
}