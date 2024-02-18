export default function ProductItemImage({ image }: { image: string }) {
    return (
        <img src={`http://localhost:8000/${image}`} style={{
            width: '14rem',
            height: '14rem',
            objectFit: 'contain',
        }} alt="" />
    )
}