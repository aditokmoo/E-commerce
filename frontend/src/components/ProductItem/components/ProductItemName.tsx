export default function ProductItem({ children }: { children: string }) {
    return (
        <h3 style={{
            width: '24rem',
            fontSize: '1.6rem'
        }}>{children}</h3>
    )
}