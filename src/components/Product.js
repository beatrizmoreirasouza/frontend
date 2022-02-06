const Product = ({ product }) => {
  const format = (valor) => {
    return valor.toFixed(2).replace(".", ",");
  };

  return (
    <div className="product">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>
      <span className="product-name">{product.name}</span>
      <span className="product-price">R$ {format(product.price)}</span>
      <button className="product-btn">
        <span>Add to Cart</span>
        <i className="fas fa-cart-arrow-down"></i>
      </button>
    </div>
  );
};

export default Product;
