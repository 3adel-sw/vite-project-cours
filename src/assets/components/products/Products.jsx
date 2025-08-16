import "./Products.module.css";
import StartIcon from "../../icons/star.png";

function Products({ products }) {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <ul
        className="products-list "
        style={{ display: "flex", gap: "1em", listStyleType: "none" }}
      >
        {products.map((product, index) => (
          <li key={index}>
            <img
              style={{ width: "200px", height: "200px" }}
              src={product.img}
              alt={product.title}
            />
            <p className="p-title fs-6 text-muted"> {product.title}</p>
            <p className="product-read fs-6">
              Read: <span className="d-flex align-items-center"></span>
              {product.read}
              {Number.isInteger(product.read) &&
                Array(product.read)
                  .fill()
                  .map((_, i) => (
                    <img
                      key={i}
                      src={StartIcon}
                      alt="start icon"
                      width="16"
                      height="16"
                      style={{ marginRight: "5px" }}
                    />
                  ))}
            </p>
            <p className="product-price fs-4">Price: {product.price} جنية</p>
            <p className="product-instead fs-6">
              {" "}
              Instead Of:
              <span style={{ color: "red", textDecoration: "line-through" }}>
                {product.insteadOf} جنية
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
