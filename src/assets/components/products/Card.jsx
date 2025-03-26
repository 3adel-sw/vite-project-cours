const Card = ({ product }) => {
  return (
    <div>
      <img
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        src={product.image}
        alt={product.title}
      />
      <h3>Title: {product.title}</h3>
      <strong style={{ color: "red", display: "block" }}>
        {" "}
        Price: {product.price}
      </strong>
      <span>Description: {product.description}</span>
    </div>
  );
};

export default Card;
