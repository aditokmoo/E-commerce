export default function ProductCardImage({ image }: { image: string }) {
    return (
        <img style={{
            width: '15rem',
            height: '15rem',
            objectFit: 'contain'
        }} src={`http://localhost:8000/${image}`} alt="" />
    )
}