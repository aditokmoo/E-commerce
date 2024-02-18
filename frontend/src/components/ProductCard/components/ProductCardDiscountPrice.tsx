export default function ProductCardDiscountPrice({ children }: { children: number }) {
    return (
        <h3 style={{margin: '2rem 0 1rem 0'}}>${children.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
    )
}