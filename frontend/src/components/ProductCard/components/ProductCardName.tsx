export default function ProductCardName({ children }: { children: string }) {
    return (
        <h4 style={{
            marginTop: '2rem',
            fontSize: '1.4rem',
            padding: '0 2rem',
            lineHeight: 1.6,
            fontWeight: 200,
        }}>{children}</h4>
    )
}