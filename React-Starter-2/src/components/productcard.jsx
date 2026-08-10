function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <p className="category">
          {product.category}
        </p>

        <h2>{product.title}</h2>

        <p className="price">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;