export default function ProductItemPrice({ children }: { children: number }) {
    return (
        <span style={{fontWeight: 'bold',
        fontSize: '1.8rem'}}>$ {children.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    )
}