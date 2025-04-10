import "./Products.module.css";

import Card from "./Card";

const Products = ({ products }) => {
  return (
    <div className="products" style={{ display: "flex", gap: "45px" }}>
      {products.map((product, index) => {
        return <Card key={index} product={product} />;
      })}
    </div>
  );
};

// Card component

export default Products;
