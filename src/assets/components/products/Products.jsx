import "./Products.module.css";
import Product from "./Product";

function Products({ products }) {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <ul
        className="products-list "
        style={{ display: "flex", gap: "1em", listStyleType: "none" }}
      >
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
