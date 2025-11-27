

const ProductCard = ({title, price, imgSrc}) => {
    const publicURL = process.env.PUBLIC_URL;
  return (
    <div className="product-card">
        <img src={`${publicURL}/images/${imgSrc}.png`}
        alt="상품이미지"/>
        <h3>{title}</h3>
        <p>{price}원</p>
    </div>
  )
}

export default ProductCard
