export default function ProductCardPrice({ children }: { children: number }) {
    return (
        <span style={{
            color: '#888',
            textDecoration: 'line-through'
        }}>${children}</span>
    )
}