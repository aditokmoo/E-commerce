export default function ProductItemQuantityInput({ quantity, dataId }: { quantity: any, dataId: string }) {
    console.log(typeof quantity)
    return (
        <input
            type="text"
            name='quantity'
            value={quantity[dataId]}
            style={{
                padding: '1rem 0',
                width: '100%',
                borderRadius: '5px',
                border: '1px solid #ddd',
                textAlign: 'center',
            }}
            id='quantity'
            readOnly
        />
    )
}