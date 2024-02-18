import { useShoppingCartContext } from "../../../context/ShoppingCartContext"

export default function ProductItemRemove({ children, data } : { children: any, data: any }) {
    const { handleRemoveCartItem } = useShoppingCartContext();

    const buttonStyle = {
        fontSize: '2rem',
        cursor: 'pointer',
    };
    
    const hoverStyle = {
        '&:hover': {
            opacity: 0.7,
        },
    };

    return (
        <span style={{ ...buttonStyle, ...hoverStyle }} onClick={() => handleRemoveCartItem(data)}>{children}</span>
    )
}