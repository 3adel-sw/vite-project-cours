// import "./Products.css";
import "./Products.module.css";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h3>Title: {product.title}</h3>
          <strong style={{ color: "red", display: "block" }}>
            Price: {product.price}
          </strong>
          <span>Description: {product.description}</span>
          <img
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
            }}
            src={product.image}
            alt={product.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
