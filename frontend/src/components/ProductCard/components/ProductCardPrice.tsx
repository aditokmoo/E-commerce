export default function ProductCardPrice({ children }: { children: number }) {
    return (
        <span style={{
            color: '#888',
            textDecoration: 'line-through'
        }}>${children.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    )
}