import { useShoppingCartContext } from "../../../context/ShoppingCartContext"

export default function ProductItemAddQuantity({ children, dataId } : { children: any, dataId: string }) {
    const { addQuantity } = useShoppingCartContext();
    
    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'inherit',
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '1rem',
        cursor: 'pointer',
    };

    const hoverStyle = {
        opacity: 0.7,
    };

    return (
        <button
            style={{ ...buttonStyle, ...hoverStyle }}
            onClick={() => addQuantity(dataId)}
        >
            {children}
        </button>
    )
}