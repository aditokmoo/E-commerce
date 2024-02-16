import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

export default function ProductCardAddFavorites() {
    const [ isHovered, setIsHovered ] = useState(false);

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
        onMouseLeave={() => setIsHovered(false)}><FaRegHeart /></button>
    )
}