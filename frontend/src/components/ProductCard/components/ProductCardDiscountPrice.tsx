export default function ProductCardDiscountPrice({ children }: { children: number }) {
    return (
        <h3 style={{margin: '2rem 0 1rem 0'}}>${children}</h3>
    )
}