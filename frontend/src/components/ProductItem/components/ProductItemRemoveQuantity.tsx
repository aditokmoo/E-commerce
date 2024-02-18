import { useShoppingCartContext } from "../../../context/ShoppingCartContext";

export default function ProductItemRemoveQuantity({ children, dataId }: { children: React.ReactNode, dataId: string }) {
    const { removeQuantity } = useShoppingCartContext();

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
            onClick={() => removeQuantity(dataId)}
        >
            {children}
        </button>
    );
}
